import React from 'react'
import Geodata from '../../core/types/Geodata'
import DescriptionList from '../DescriptionList'
import DescriptionListItem from '../DescriptionList/DescriptionListItem'

export default function LocationDetails(geodata: Geodata) {
  return (
    <DescriptionList>
      <DescriptionListItem title="ISP" description={geodata?.isp} />
      <DescriptionListItem title="Proveedor" description={geodata?.as.name} />
      {geodata?.location.postalCode ? (
        <DescriptionListItem
          title="Código postal"
          description={geodata?.location.postalCode}
        />
      ) : null}
      <DescriptionListItem
        title="Sitio"
        description={
          <a target="_blank" href={geodata?.as.domain} rel="noreferrer">
            {geodata?.as.domain}
          </a>
        }
      />
      {geodata?.as.route ? (
        <DescriptionListItem title="Ruta" description={geodata?.as.route} />
      ) : null}
      <DescriptionListItem
        title="Ciudad"
        description={`${geodata?.location.city}, ${geodata?.location.region}`}
      />
      <DescriptionListItem
        title="País"
        description={geodata?.location.country}
      />
      <DescriptionListItem
        title="Zona Horaria"
        description={geodata?.location.timezone}
      />
    </DescriptionList>
  )
}
