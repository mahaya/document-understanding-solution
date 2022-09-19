
/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the License). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/

import { schema } from 'normalizr'
import { lensPath } from 'ramda'
import { MIN_SEARCH_QUERY_LENGTH, ENABLE_KENDRA } from '../../../constants/configs'

// Track Schemas
export const trackSchema = new schema.Entity('tracks')
export const tracksSchema = new schema.Array(trackSchema)

// Track Lenses
export const lensTracks = lensPath(['entities', 'tracks'])
export const lensTrack = id => lensPath(['entities', 'tracks', id])
const kendraModeDescription = `
In this track, you can search through multiple documents and find information faster
and more efficiently, using  traditional search based technologies such as Amazon 
Elasticsearch Service (Amazon ES) as well using state-of-the-art machine learning and natural language enterprise search
with Amazon Kendra.

Once you select a document, you'll be able to interact with Amazon Textract,
Amazon Comprehend, and Amazon Comprehend Medical to experience the power
of document digitization and extraction of sensitive information.

For demo purposes, the solution is pre-loaded with data related to certain medical conditions such as Diabetes and Kidney Disease. Ask a question related to these topics or use the suggested queries in the search bar and explore the different search capabilities.
`
const classicModeDescription = `In this track, you can search through multiple documents and find information faster
and more efficiently, using Amazon Elasticsearch.

Once you select a document, you'll be able to interact with Amazon Textract,
Amazon Comprehend, and Amazon Comprehend Medical to experience the power
of document digitization and extraction of sensitive information.`
const discoveryTrackDescription = ENABLE_KENDRA? kendraModeDescription:classicModeDescription;
;
// Initial Data
export default {
  redaction: {
    id: 'redaction',
    title: 'Compliance',
    subtitle: 'Redact information from a document',
    longDescription: `
      xyz
    `,
    icon: '/static/images/icon_redact.svg',
    palette: 'teal',
  },
    icon: '/static/images/icon_workflow.svg',
    palette: 'purple',
  },
}
