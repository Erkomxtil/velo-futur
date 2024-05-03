import PropTypes from 'prop-types'
BikeCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  infos: PropTypes.string.isRequired,
  price: PropTypes.string,
  link: PropTypes.string.isRequired,
 
}

export function BikeCard ({title, image, infos, price, link}) {
  return (
    <div className='mt-[20px] w-full phone:max-w-[500px] laptop:mt-0'>
      <a href={link} target="_blank">
        <img className='w-full px-5 phone:px-0 phone:h-[400px] phone:w-[500px] phone:border-solid phone:border-[#413A3A] phone:border-[4px]' src={image} alt="Vélo" />
        <p className='text-[black] py-4 px-5 phone:px-0'>
          {title} <br />
          <span className='font-[100] mt-4 block'>{infos ? `${infos}`: ""}</span>
          {price ? `${price}` : ""}
        </p>      
      </a>
    </div>
  )
}
