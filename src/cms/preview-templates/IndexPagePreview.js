import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()
  const entryServiceImages = entry.getIn(['data', 'services', 'images'])
  const ServiceImages = entryServiceImages ? entryServiceImages.toJS() : []

  const entryServices = entry.getIn(['data', 'services', 'service'])
  const Services = entryServices ? entryServices.toJS() : []

  const entryWorkLogos = entry.getIn(['data', 'work', 'logos'])
  const WorkLogos = entryWorkLogos ? entryWorkLogos.toJS() : []

  if (data) {
    return (
      <IndexPageTemplate
        bgimage={getAsset(data.getIn(['data', 'bgimage']))}
        siteName={data.getIn(['data', 'siteName'])}
        heading={data.getIn(['data', 'heading'])}
        subheading={data.getIn(['data', 'subheading'])}
        calltoaction={{
          title:data.getIn(['data', 'calltoaction','title']),
          description:data.getIn(['data', 'calltoaction','description']),
        }}
        services={{
          images:ServiceImages,
          service:Services
        }}
        work={{
          headerImage: getAsset(data.getIn(['data', 'work', 'headerImage'])),
          logos : WorkLogos
        }}
        about={{
          sideImage:getAsset(data.getIn(['data', 'about', 'sideImage'])),
          description:getIn(['data','about','description'])
        }}
        footer={{
          address:data.getIn(['data', 'footer','address']),
          contact:data.getIn(['data', 'footer','contact']),
          phone:data.getIn(['data', 'footer','phone']),
        }}
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
