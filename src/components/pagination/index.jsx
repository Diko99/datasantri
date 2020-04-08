import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap'

class PaginationButton extends Component {
  render () {
    const previousBtn = {
      disabled: this.isDisabledPrevious(),
      onClick: this.props.onPreviousPage,
      titleBtn: 'Previous'
    }

    const nextBtn = {
      disabled: this.isDisabledNext(),
      onClick: this.props.onNextPage,
      titleBtn: 'Next'
    }

    return (
      <div className='container-fluid d-flex justify-content-between'>
        <p>
          &copy; Copyright template By &nbsp;
          <span>
            <a
              className='text-white'
              href='https://github.com/Diko99'
            >
              Diko Mahendra
            </a>
          </span>
        </p>
        <Pagination
          className='pagination justify-space-between m-4'
          aria-label='Page navigation example'
        >
          {this.renderActionButton(previousBtn)}

          {this.renderPaginationButton()}

          {this.renderActionButton(nextBtn)}
        </Pagination>
      </div>
    )
  }

  renderActionButton = (props = { active: false, id: 'id kosong' }) => {
    return (
      <PaginationItem
        key={props.key}
        disabled={props.disabled}
        active={props.active}
      >
        <PaginationLink
          id={props.id}
          onClick={props.onClick}
        >
          {props.titleBtn}
        </PaginationLink>
      </PaginationItem>
    )
  }

  renderPaginationButton = () => {
    return (
      this.props.paginationNumbers.map((item, index) => {
        const paginationNumberBtn = {
          key: index,
          active: this.props.currentPage === item,
          id: item,
          titleBtn: item,
          onClick: this.props.onMovePage
        }

        return this.renderActionButton(paginationNumberBtn)
      })
    )
  }

  isDisabledPrevious = () => {
    return this.props.currentPage <= 1
  }

  isDisabledNext = () => {
    return this.props.currentPage === this.props.paginationNumbers.length
  }
}

PaginationButton.propTypes = {
  currentPage: PropTypes.number,
  paginationNumbers: PropTypes.array,
  onMovePage: PropTypes.func,
  onPreviousPage: PropTypes.func,
  onNextPage: PropTypes.func
}

export default PaginationButton
