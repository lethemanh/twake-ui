import { describe, expect, it } from 'vitest'

import {
  File,
  FileTypeImage,
  FileTypePdf,
  FileTypeSheet,
  FileTypeText,
  FileTypeVideo,
  FileTypeZip
} from '../Icons'
import { getFileTypeIcon } from './getFileTypeIcon'

describe('getFileTypeIcon', () => {
  it('returns the icon matching the provided MIME type', () => {
    expect(getFileTypeIcon('document', 'application/pdf')).toBe(FileTypePdf)
    expect(getFileTypeIcon('image', 'image/png')).toBe(FileTypeImage)
  })

  it('normalizes parameterized MIME types before matching', () => {
    expect(getFileTypeIcon('data', 'text/csv; charset=utf-8')).toBe(
      FileTypeSheet
    )
  })

  it('uses mime-types filename lookup when MIME type is missing', () => {
    expect(getFileTypeIcon('archive.rar')).toBe(FileTypeZip)
    expect(getFileTypeIcon('movie.mkv')).toBe(FileTypeVideo)
    expect(getFileTypeIcon('notes.odt')).toBe(FileTypeText)
  })

  it('returns the default icon when neither MIME type nor filename match', () => {
    expect(getFileTypeIcon('unknown.unknown-extension')).toBe(File)
  })
})
