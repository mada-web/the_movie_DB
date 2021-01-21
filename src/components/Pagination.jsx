import React from 'react'
import { Pagination as SemanticPagination } from 'semantic-ui-react'

const Pagination = (props) => {
  const { setPageNumber, dataRequest } = props

  const onPageChange = (_event, data) => {
    setPageNumber(data.activePage)
  }

  return (
    <SemanticPagination
      defaultActivePage={dataRequest.page}
      totalPages={dataRequest.total_pages}
      onPageChange={onPageChange}
    />
  )
}

export default Pagination
