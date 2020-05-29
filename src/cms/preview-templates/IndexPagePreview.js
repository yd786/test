import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  
  const entryServiceImages = entry.getIn(['data', 'services', 'images'])
  const ServiceImages = entryServiceImages ? entryServiceImages.toJS() : []

  const entryServices = entry.getIn(['data', 'services', 'service'])
  const Services = entryServices ? entryServices.toJS() : []

  const entryWorkLogos = entry.getIn(['data', 'work', 'logos'])
  const WorkLogos = entryWorkLogos ? entryWorkLogos.toJS() : []
  console.log(data)
  if (data) {
    return (
      <IndexPageTemplate
        bgimage={getAsset(data.getIn(['data', 'bgimage']))}
        siteName={data.getIn(['data', 'siteName'])}
        heading={data.getIn(['data', 'heading'])}
        subheading={data.getIn(['data', 'subheading'])}
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
