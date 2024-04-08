// import styles from './customNavBar.css?inline'
import {useWorkspace} from 'sanity'
import {Flex} from '@sanity/ui'
import React from 'react'

export const CustomNavbar = props => {
  const {dataset} = useWorkspace()
  const color = dataset !== 'production' ? '#bfe3e0' : '#ff5c5c'

  return (
    <>
      <Flex
        justify={'space-between'}
        align={'center'}
        style={{width: '100%', borderBottom: '1px solid #e3e4e8'}}
      >
        <img
          src="/static/logo.svg"
          alt="Brooklyn Studio Logo"
          // className={styles.customNavBarLogo}
          style={{padding: '0.75rem', width: '20%', maxWidth: '280px'}}
        />
        <div style={{margin: '0.5rem 1rem', padding: '0.75rem', height: '22%', minHeight: '22%', background: color, borderRadius: '10px'}}>
          <p style={{margin: '0', fontSize: '13px'}}>
            You are currently on the{' '}
            <span style={{fontWeight: 'bold'}}>{dataset}</span> dataset
          </p>
        </div>
      </Flex>
      <div style={{width: '100%'}}>{props.renderDefault(props)}</div>
    </>
  )
}

export default CustomNavbar
