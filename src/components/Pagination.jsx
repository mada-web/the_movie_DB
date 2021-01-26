import React from 'react'
import { Pagination as SemanticPagination } from 'semantic-ui-react'

const Pagination = (props) => {
  const { setPageNumber, currentPage, totalPages } = props

  const onPageChange = (_event, data) => {
    setPageNumber(data.activePage)
  }

  return (
    <SemanticPagination
      defaultActivePage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  )
}

export default Pagination
