import React from 'react'
import { Pagination as SemanticPaginaton } from 'semantic-ui-react'

const DEFAULT_ACTIVE_PAGE = 1
const TOTAL_PAGES = 10

const Pagination = (props) => {
  const { setPageNumber } = props

  const onPageChange = (_event, data) => {
    setPageNumber(data.activePage)
  }

  return (
    <SemanticPaginaton
      defaultActivePage={DEFAULT_ACTIVE_PAGE}
      totalPages={TOTAL_PAGES}
      onPageChange={onPageChange}
    />
  )
}

export default Pagination
