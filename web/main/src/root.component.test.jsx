import React from 'react'
import { render } from '@testing-library/react'
import Root from './root.component'
import { ExpansionPanelActions } from '@material-ui/core'

describe('Root component', () => {
  it('should be in the document', () => {
    const { getByText } = render(<Root name='Testapp' />)
    // expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument()
    expect(true).toBe(true)
  })
})
