// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, updateActiveTab} = props
  const {tabId, displayText} = tabDetails

  const changeActiveTab = () => {
    updateActiveTab(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`btn ${activeTabClassName}`}
        onClick={changeActiveTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
