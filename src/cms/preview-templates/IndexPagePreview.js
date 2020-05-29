import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <IndexPageTemplate
        bgimage={getAsset(data.bgimage)}
        siteName={data.siteName}
        heading={data.heading}
        subheading={data.subheading}
        calltoaction={data.calltoaction}
        services={data.services}
        work={data.work}
        about={data.about}
        footer={data.footer}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
