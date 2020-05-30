import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const entryServices = entry.getIn(['data', 'services', 'service'])
  const Services = entryServices ? entryServices.toJS() : []

  const entryWorkLogos = entry.getIn(['data', 'work', 'logos'])
  const WorkLogos = entryWorkLogos ? entryWorkLogos.toJS() : []

    return (
      <IndexPageTemplate
        bgimage={getAsset(entry.getIn(['data', 'bgimage']))}
        siteName={entry.getIn(['data', 'siteName'])}
        heading={entry.getIn(['data', 'heading'])}
        subheading={entry.getIn(['data', 'subheading'])}
        calltoaction={{
          title:entry.getIn(['data', 'calltoaction','title']),
          description:entry.getIn(['data', 'calltoaction','description']),
        }}
        services={{
          image1:getAsset(entry.getIn(['data','services','image1'])),
          image2:getAsset(entry.getIn(['data','services','image2'])),
          image3:getAsset(entry.getIn(['data','services','image3'])),
          service:Services
        }}
        work={{
          headerImage: getAsset(entry.getIn(['data', 'work', 'headerImage'])),
          logos : WorkLogos
        }}
        about={{
          sideImage:getAsset(entry.getIn(['data', 'about', 'sideImage'])),
          description:entry.getIn(['data','about','description'])
        }}
        footer={{
          address:entry.getIn(['data', 'footer','address']),
          contact:entry.getIn(['data', 'footer','contact']),
          phone:entry.getIn(['data', 'footer','phone']),
        }}
      />
    )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
