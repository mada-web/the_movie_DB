import { useData } from './hooks'
import PersonItem from '../../components/PersonItem'

export const PersonPage = (props) => {
  const { history } = props
  const { id } = props.match.params
  const { personData, cast } = useData(id)

  if (!personData) {
    return <span>Loading...</span>
  }

  return (
    <div className="main-content">
      <PersonItem
        cast={cast}
        info={personData}
        key={personData.id}
        history={history}
      />
    </div>
  )
}
