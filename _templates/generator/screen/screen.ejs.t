---
to: src/components/screens/<%= repo %>/<%= name %>/<%= name %>.tsx
---
import React from 'react'
import Box from '../../../designSystem/Box/Box'
import Text from '../../../designSystem/Text/Text'

export const <%= name %> = () => {
  return (
    <Box>
      <Text><%= name %></Text>
    </Box>
  )
}