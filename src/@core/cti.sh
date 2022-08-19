#!/bin/sh

npm run cti create './src/example/domain' -- -i '*spec.ts' -b &&
npm run cti create './src/example/application' -- -i '*spec.ts' -b &&
npm run cti create './src/example/infra' -- -i '*spec.ts' -b



