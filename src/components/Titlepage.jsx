import PropTypes from 'prop-types'

Titlepage.propTypes = {
  title: PropTypes.string.isRequired
}

export function Titlepage({ title }) {
  return <h1 className="uppercase  text-[38px] pt-[30px] laptop:text-[40px] text-center  laptop:mb-[30px]">{title}</h1>
}
