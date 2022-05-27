import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'

// all available config props
const config = {
  width: '400px',
  height: '500px',
  floating: true,
}

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: 'intro',
            message:
              'Hey!I hope you and your pet are feeling well! What disease have your lovely pet?',
            trigger: 'intro-user',
          },
          {
            id: 'intro-user',
            options: [
              { value: 'Rabies', label: 'Rabies', trigger: 'Rabies' },
              {
                value: 'Heartworm',
                label: 'Heartworm',
                trigger: 'Heartworm',
              },
              { value: 'Diabetes', label: 'Diabetes', trigger: 'Diabetes' },
            ],
          },
          {
            id: 'Rabies',
            message:
              ' Vaccinate your animals and keep them away from wildlife that can spread the disease. Rabies is 100% preventable.',
            end: true,
          },
          {
            id: 'Heartworm',
            message:
              'Blood tests are performed by your veterinarian to detect the presence of adult heartworm infection (> 6 month old infections) in your dog.',
            end: true,
          },
          {
            id: 'Diabetes',
            message:
              'Diabetes may be suspected based on the signs a pet is showing, but the diagnosis is confirmed by your veterinarian by finding consistent hyperglycemia and glucosuria.',
            end: true,
          },
        ]}
        {...config}
      />
    )
  }
}

export default SimpleForm
