import PropTypes from 'prop-types'
BikeCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  infos: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
 
}

export function BikeCard ({title, image, infos, price, link}) {
  return (
    <div className='max-w-[500px] border-solid border-white border-4'>
      <a href={link} target="_blank">
        <img className='h-[400px] w-[500px]' src={image} alt="Vélo" />
        <p className='text-[black] py-4'>
          {title} <br />
          <span className='font-[100] mt-4 block'>{infos ? `${infos}`: ""}</span>
          {price ? `${price}` : ""}
        </p>      
      </a>
    </div>
  );
}
