import { observer } from 'mobx-react-lite'
import store from '../../../../Search/Users/store'

const Departments = observer((): JSX.Element => {
  return (
    <>
      {store.departments.map((dep, index) =>
        dep ? <option key={index}>{dep}</option> : '',
      )}
    </>
  )
})

export default Departments
