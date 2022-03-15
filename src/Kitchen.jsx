import Oven from './Oven'
import Sink from './Sink'

const Kitchen = () => {
  return (
      <div className='kitchen'>
      Kitchen
      <div className='oven'>
      <Oven />
      </div>

      <div className='sink'>
      <Sink />
      </div>
      </div>
  );
}

export default Kitchen;