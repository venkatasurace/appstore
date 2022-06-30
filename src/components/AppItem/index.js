// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-item">
      <img className="app-image" src={imageUrl} alt={appName} />
      <a className="app-name" href={`http://www.${appName}.in/`}>
        {appName}
      </a>
    </li>
  )
}

export default AppItem
