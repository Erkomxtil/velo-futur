import PropTypes from 'prop-types'

Titlepage.propTypes = {
  title: PropTypes.string.isRequired
}

export function Titlepage({ title }) {
  return <h1 className="uppercase  text-[40px] mb-[30px] pt-[5%] laptop:text-[40px] text-center  laptop:mb-[30px]">{title}</h1>
}
