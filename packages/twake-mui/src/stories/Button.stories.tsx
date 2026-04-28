import { Button, Stack } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Docs: Story = {
  args: {
    variant: 'contained',
    children: 'Button'
  }
}

// Visual Regression - All variants combined
export const Screenshot: Story = {
  tags: ['argos'],
  render: () => (
    <Stack spacing={4}>
      {/* Variants */}
      <section>
        <h3 style={{ marginBottom: '12px' }}>Variants</h3>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
        </Stack>
      </section>

      {/* Colors */}
      <section>
        <h3 style={{ marginBottom: '12px' }}>Colors contained</h3>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
        </Stack>
      </section>
      <section>
        <h3 style={{ marginBottom: '12px' }}>Colors outlined</h3>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
          <Button variant="outlined" color="info">
            Info
          </Button>
        </Stack>
      </section>
      <section>
        <h3 style={{ marginBottom: '12px' }}>Colors text</h3>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
          <Button variant="text" color="success">
            Success
          </Button>
          <Button variant="text" color="error">
            Error
          </Button>
          <Button variant="text" color="warning">
            Warning
          </Button>
          <Button variant="text" color="info">
            Info
          </Button>
        </Stack>
      </section>

      {/* Sizes */}
      <section>
        <h3 style={{ marginBottom: '12px' }}>Sizes</h3>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>
      </section>

      {/* States */}
      <section>
        <h3 style={{ marginBottom: '12px' }}>States</h3>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Normal</Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
        </Stack>
      </section>
    </Stack>
  )
}
