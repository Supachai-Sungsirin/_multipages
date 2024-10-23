import Counter from '../../components/Counter/Counter'
import Timer from '../../components/Timer/Timer'
import Add from '../../components/Add/Add'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Temperatures from '../../components/Temperatures/Temperatures'

import './Component.css' 
function Component() {

  return (
    <div className='component-container'>
      <div className="component-header">
        <h3>REACT COMPONENTS</h3>
        </div>

      <div className="grid-container">
        <div className='group'>
        <div className='counter'><Counter /></div>
        <div className='timer'><Timer /></div>
        
        </div> 
        <div className='add'><Add /></div>
      </div>

      <div>
        <Temperatures />
      </div>

      <div className="footer">
        <h3>นายศุภชัย สังข์ศิรินทร์ รหัสนักศึกษา : 66073563</h3>
      </div>
    </div>
  )
}

export default Component
