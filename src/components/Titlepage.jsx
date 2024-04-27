import PropTypes from 'prop-types'
Titlepage.propTypes = {
  title: PropTypes.string.isRequired
}

export function Titlepage({ title }) {
  return <h1 className="uppercase text-[50px] text-center pt-[40px] mb-[60px]">{title}</h1>
}
