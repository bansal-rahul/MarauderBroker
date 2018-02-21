import React, {Component} from 'react'
import Notifications from '../components/Notifications'

const sample = [
    {
      property: {
        address: 'Plot No 25, Echelon Square',
        details: '3 BHK Apartment'
      },
      personName: 'Rahul Bansal',
      contact: 9999999999,
      timing: '3 PM'
    },
    {
      property: {
        address: 'Plot No 25, Echelon Square',
        details: '3 BHK Apartment'
      },
      personName: 'Rahul Bansal',
      contact: 9999999999,
      timing: '3 PM'
    }
  ]

export default class Home extends Component {
    render() {
        return (
            <Notifications notifications={sample} />
        )
    }
}