const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const LoadingWrapper = props => {
  const {apiStatus, renderLoadingView, renderFailureView, renderSuccessView} =
    props

  switch (apiStatus) {
    case apiStatusConstants.inProgress:
      return renderLoadingView()
    case apiStatusConstants.failure:
      return renderFailureView()
    case apiStatusConstants.success:
      return renderSuccessView()
    default:
      return null
  }
}

export default LoadingWrapper
