import { createStore } from 'vuex'
import { testData, testPosts, ColumnProps, PostProps } from './testData'

interface UserProps {
    isLogin: boolean;
    name?: string;
    id?: number;
}

export interface GloableDataProps {
    colunms: ColumnProps[];
    props: PostProps[];
    user: UserProps;
}
const store = createStore<GloableDataProps|null>(
  {
    state: {
      columns: testData,
      posts: testPosts,
      user: {
        isLogin: false
      }
    },
    mutations: {}
  }
)
export default store
