'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.haproxyMetricsSpecProvider = haproxyMetricsSpecProvider;

var _tutorial_category = require('../../../common/tutorials/tutorial_category');

var _metricbeat_instructions = require('../../../common/tutorials/metricbeat_instructions');

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function haproxyMetricsSpecProvider() {
  const moduleName = 'haproxy';
  return {
    id: 'haproxyMetrics',
    name: 'HAProxy metrics',
    isBeta: true,
    category: _tutorial_category.TUTORIAL_CATEGORY.METRICS,
    shortDescription: 'Fetch internal metrics from the HAProxy server.',
    longDescription: 'The `haproxy` Metricbeat module fetches internal metrics from HAProxy.' + ' [Learn more]({config.docs.beats.metricbeat}/metricbeat-module-haproxy.html).',
    artifacts: {
      application: {
        label: 'Discover',
        path: '/app/kibana#/discover'
      },
      dashboards: [],
      exportedFields: {
        documentationUrl: '{config.docs.beats.metricbeat}/exported-fields-haproxy.html'
      }
    },
    completionTimeMinutes: 10,
    onPrem: (0, _metricbeat_instructions.onPremInstructions)(moduleName),
    elasticCloud: (0, _metricbeat_instructions.cloudInstructions)(moduleName),
    onPremElasticCloud: (0, _metricbeat_instructions.onPremCloudInstructions)(moduleName)
  };
}