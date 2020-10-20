import { createStore, Commit } from 'vuex'
import axios from 'axios'
interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}
export interface GlobalDataProps {
  loading: boolean;
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}

export interface ImageProps {
  _id?: string;
  url?: string;
  createdAt?: string;
  fitUrl?: string;
}

export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
  description: string;
}
export interface PostProps {
  _id: string;
  title: string;
  excerpt?: string;
  content: string;
  image?: ImageProps;
  createdAt?: string;
  column: string;
}

const getAndCommit = async (url: string, mutationName: string, commit: Commit) => {
  const { data } = await axios.get(url)
  commit(mutationName, data)
}

const store = createStore<GlobalDataProps>(
  {
    state: {
      loading: false,
      columns: [],
      posts: [],
      user: {
        isLogin: true,
        name: 'LXL',
        columnId: 1
      }
    },
    mutations: {
      login (state) {
        state.user = { ...state.user, isLogin: true, name: 'LXL' }
      },
      createPost (state, newPost) {
        state.posts.push(newPost)
      },
      fatachColumns (state, rawData) {
        state.columns = rawData.data.list
      },
      fatchColumn (state, rawData) {
        state.columns = [rawData.data]
      },
      fatchPosts (state, rawData) {
        state.posts = rawData.data.list
      },
      setLoading (state, status) {
        state.loading = status
      }
    },
    actions: {
      fatachColumns ({ commit }) {
        getAndCommit('/columns', 'fatachColumns', commit)
      },
      fatchColumn ({ commit }, cid) {
        getAndCommit(`/columns/${cid}`, 'fatchColumn', commit)
      },
      fatchPosts ({ commit }, cid) {
        getAndCommit(`/columns/${cid}/posts`, 'fatchPosts', commit)
      }
    },
    getters: {
      getColumnById: (state) => (id: string) => {
        return state.columns.find(c => c._id === id)
      },
      getPostsByCid: (state) => (cid: string) => {
        return state.posts.filter(post => post.column === cid)
      }
    }
  }
)

export default store
