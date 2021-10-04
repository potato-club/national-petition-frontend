'use strict';

var defaultRoleAssumers = require('./defaultRoleAssumers-e8faa46f.js');
var serdePlugin = require('./serdePlugin-1937a35b.js');
require('http2');
require('stream');
require('./constants-0d108348.js');
require('./index-b679adc8.js');
require('url');
require('buffer');
require('http');
require('fs');
require('os');
require('path');
require('crypto');
require('https');
require('process');
require('child_process');
require('./default-handler-7431a686.js');
require('./prerender-manifest.json');
require('./manifest.json');
require('./routes-manifest.json');
require('zlib');
require('perf_hooks');

var name = "@aws-sdk/client-sqs";
var description = "AWS SDK for JavaScript Sqs Client for Node.js, Browser and React Native";
var version = "3.33.0";
var scripts = {
	clean: "yarn remove-definitions && yarn remove-dist && yarn remove-documentation",
	"build-documentation": "yarn remove-documentation && typedoc ./",
	"remove-definitions": "rimraf ./types",
	"remove-dist": "rimraf ./dist",
	"remove-documentation": "rimraf ./docs",
	test: "exit 0",
	"build:cjs": "tsc -p tsconfig.json",
	"build:es": "tsc -p tsconfig.es.json",
	build: "yarn build:cjs && yarn build:es",
	"downlevel-dts": "downlevel-dts dist/types dist/types/ts3.4"
};
var main = "./dist/cjs/index.js";
var types = "./dist/types/index.d.ts";
var module$1 = "./dist/es/index.js";
var browser = {
	"./runtimeConfig": "./runtimeConfig.browser"
};
var sideEffects = false;
var dependencies = {
	"@aws-crypto/sha256-browser": "^1.0.0",
	"@aws-crypto/sha256-js": "^1.0.0",
	"@aws-sdk/client-sts": "3.33.0",
	"@aws-sdk/config-resolver": "3.33.0",
	"@aws-sdk/credential-provider-node": "3.33.0",
	"@aws-sdk/fetch-http-handler": "3.32.0",
	"@aws-sdk/hash-node": "3.32.0",
	"@aws-sdk/invalid-dependency": "3.32.0",
	"@aws-sdk/md5-js": "3.32.0",
	"@aws-sdk/middleware-content-length": "3.32.0",
	"@aws-sdk/middleware-host-header": "3.32.0",
	"@aws-sdk/middleware-logger": "3.32.0",
	"@aws-sdk/middleware-retry": "3.32.0",
	"@aws-sdk/middleware-sdk-sqs": "3.32.0",
	"@aws-sdk/middleware-serde": "3.32.0",
	"@aws-sdk/middleware-signing": "3.33.0",
	"@aws-sdk/middleware-stack": "3.32.0",
	"@aws-sdk/middleware-user-agent": "3.32.0",
	"@aws-sdk/node-config-provider": "3.32.0",
	"@aws-sdk/node-http-handler": "3.32.0",
	"@aws-sdk/protocol-http": "3.32.0",
	"@aws-sdk/smithy-client": "3.32.0",
	"@aws-sdk/types": "3.32.0",
	"@aws-sdk/url-parser": "3.32.0",
	"@aws-sdk/util-base64-browser": "3.32.0",
	"@aws-sdk/util-base64-node": "3.32.0",
	"@aws-sdk/util-body-length-browser": "3.32.0",
	"@aws-sdk/util-body-length-node": "3.32.0",
	"@aws-sdk/util-user-agent-browser": "3.32.0",
	"@aws-sdk/util-user-agent-node": "3.33.0",
	"@aws-sdk/util-utf8-browser": "3.32.0",
	"@aws-sdk/util-utf8-node": "3.32.0",
	entities: "2.2.0",
	"fast-xml-parser": "3.19.0",
	tslib: "^2.3.0"
};
var devDependencies = {
	"@aws-sdk/client-documentation-generator": "3.32.0",
	"@types/node": "^12.7.5",
	"downlevel-dts": "0.7.0",
	jest: "^26.1.0",
	rimraf: "^3.0.0",
	"ts-jest": "^26.4.1",
	typedoc: "^0.19.2",
	typescript: "~4.3.5"
};
var engines = {
	node: ">=10.0.0"
};
var typesVersions = {
	"<4.0": {
		"dist/types/*": [
			"dist/types/ts3.4/*"
		]
	}
};
var author = {
	name: "AWS SDK for JavaScript Team",
	url: "https://aws.amazon.com/javascript/"
};
var license = "Apache-2.0";
var homepage = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sqs";
var repository = {
	type: "git",
	url: "https://github.com/aws/aws-sdk-js-v3.git",
	directory: "clients/client-sqs"
};
var packageInfo = {
	name: name,
	description: description,
	version: version,
	scripts: scripts,
	main: main,
	types: types,
	module: module$1,
	browser: browser,
	"react-native": {
	"./runtimeConfig": "./runtimeConfig.native"
},
	sideEffects: sideEffects,
	dependencies: dependencies,
	devDependencies: devDependencies,
	engines: engines,
	typesVersions: typesVersions,
	author: author,
	license: license,
	homepage: homepage,
	repository: repository
};

const regionHash = {
    "fips-us-east-1": {
        hostname: "sqs-fips.us-east-1.amazonaws.com",
        signingRegion: "us-east-1",
    },
    "fips-us-east-2": {
        hostname: "sqs-fips.us-east-2.amazonaws.com",
        signingRegion: "us-east-2",
    },
    "fips-us-west-1": {
        hostname: "sqs-fips.us-west-1.amazonaws.com",
        signingRegion: "us-west-1",
    },
    "fips-us-west-2": {
        hostname: "sqs-fips.us-west-2.amazonaws.com",
        signingRegion: "us-west-2",
    },
    "us-gov-east-1": {
        hostname: "sqs.us-gov-east-1.amazonaws.com",
        signingRegion: "us-gov-east-1",
    },
    "us-gov-west-1": {
        hostname: "sqs.us-gov-west-1.amazonaws.com",
        signingRegion: "us-gov-west-1",
    },
};
const partitionHash = {
    aws: {
        regions: [
            "af-south-1",
            "ap-east-1",
            "ap-northeast-1",
            "ap-northeast-2",
            "ap-northeast-3",
            "ap-south-1",
            "ap-southeast-1",
            "ap-southeast-2",
            "ca-central-1",
            "eu-central-1",
            "eu-north-1",
            "eu-south-1",
            "eu-west-1",
            "eu-west-2",
            "eu-west-3",
            "fips-us-east-1",
            "fips-us-east-2",
            "fips-us-west-1",
            "fips-us-west-2",
            "me-south-1",
            "sa-east-1",
            "us-east-1",
            "us-east-2",
            "us-west-1",
            "us-west-2",
        ],
        hostname: "sqs.{region}.amazonaws.com",
    },
    "aws-cn": {
        regions: ["cn-north-1", "cn-northwest-1"],
        hostname: "sqs.{region}.amazonaws.com.cn",
    },
    "aws-iso": {
        regions: ["us-iso-east-1"],
        hostname: "sqs.{region}.c2s.ic.gov",
    },
    "aws-iso-b": {
        regions: ["us-isob-east-1"],
        hostname: "sqs.{region}.sc2s.sgov.gov",
    },
    "aws-us-gov": {
        regions: ["us-gov-east-1", "us-gov-west-1"],
        hostname: "sqs.{region}.amazonaws.com",
    },
};
const defaultRegionInfoProvider = async (region, options) => defaultRoleAssumers.getRegionInfo(region, {
    ...options,
    signingService: "sqs",
    regionHash,
    partitionHash,
});

/**
 * @internal
 */
const getRuntimeConfig$1 = (config) => {
    var _a, _b, _c, _d, _e;
    return ({
        apiVersion: "2012-11-05",
        disableHostPrefix: (_a = config === null || config === void 0 ? void 0 : config.disableHostPrefix) !== null && _a !== void 0 ? _a : false,
        logger: (_b = config === null || config === void 0 ? void 0 : config.logger) !== null && _b !== void 0 ? _b : {},
        regionInfoProvider: (_c = config === null || config === void 0 ? void 0 : config.regionInfoProvider) !== null && _c !== void 0 ? _c : defaultRegionInfoProvider,
        serviceId: (_d = config === null || config === void 0 ? void 0 : config.serviceId) !== null && _d !== void 0 ? _d : "SQS",
        urlParser: (_e = config === null || config === void 0 ? void 0 : config.urlParser) !== null && _e !== void 0 ? _e : defaultRoleAssumers.parseUrl,
    });
};

/**
 * @internal
 */
const getRuntimeConfig = (config) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    defaultRoleAssumers.emitWarningIfUnsupportedVersion(process.version);
    const clientSharedValues = getRuntimeConfig$1(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        base64Decoder: (_a = config === null || config === void 0 ? void 0 : config.base64Decoder) !== null && _a !== void 0 ? _a : defaultRoleAssumers.fromBase64,
        base64Encoder: (_b = config === null || config === void 0 ? void 0 : config.base64Encoder) !== null && _b !== void 0 ? _b : defaultRoleAssumers.toBase64,
        bodyLengthChecker: (_c = config === null || config === void 0 ? void 0 : config.bodyLengthChecker) !== null && _c !== void 0 ? _c : defaultRoleAssumers.calculateBodyLength,
        credentialDefaultProvider: (_d = config === null || config === void 0 ? void 0 : config.credentialDefaultProvider) !== null && _d !== void 0 ? _d : defaultRoleAssumers.decorateDefaultCredentialProvider(defaultRoleAssumers.defaultProvider),
        defaultUserAgentProvider: (_e = config === null || config === void 0 ? void 0 : config.defaultUserAgentProvider) !== null && _e !== void 0 ? _e : defaultRoleAssumers.defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: packageInfo.version }),
        maxAttempts: (_f = config === null || config === void 0 ? void 0 : config.maxAttempts) !== null && _f !== void 0 ? _f : defaultRoleAssumers.loadConfig(defaultRoleAssumers.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        md5: (_g = config === null || config === void 0 ? void 0 : config.md5) !== null && _g !== void 0 ? _g : defaultRoleAssumers.Hash.bind(null, "md5"),
        region: (_h = config === null || config === void 0 ? void 0 : config.region) !== null && _h !== void 0 ? _h : defaultRoleAssumers.loadConfig(defaultRoleAssumers.NODE_REGION_CONFIG_OPTIONS, defaultRoleAssumers.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: (_j = config === null || config === void 0 ? void 0 : config.requestHandler) !== null && _j !== void 0 ? _j : new defaultRoleAssumers.NodeHttpHandler(),
        retryMode: (_k = config === null || config === void 0 ? void 0 : config.retryMode) !== null && _k !== void 0 ? _k : defaultRoleAssumers.loadConfig(defaultRoleAssumers.NODE_RETRY_MODE_CONFIG_OPTIONS),
        sha256: (_l = config === null || config === void 0 ? void 0 : config.sha256) !== null && _l !== void 0 ? _l : defaultRoleAssumers.Hash.bind(null, "sha256"),
        streamCollector: (_m = config === null || config === void 0 ? void 0 : config.streamCollector) !== null && _m !== void 0 ? _m : defaultRoleAssumers.streamCollector,
        utf8Decoder: (_o = config === null || config === void 0 ? void 0 : config.utf8Decoder) !== null && _o !== void 0 ? _o : defaultRoleAssumers.fromUtf8,
        utf8Encoder: (_p = config === null || config === void 0 ? void 0 : config.utf8Encoder) !== null && _p !== void 0 ? _p : defaultRoleAssumers.toUtf8,
    };
};

/**
 * <p>Welcome to the <i>Amazon SQS API Reference</i>.</p>
 *         <p>Amazon SQS is a reliable, highly-scalable hosted queue for storing messages as they travel between applications or microservices. Amazon SQS moves data between distributed application components and helps you decouple these components.</p>
 *         <p>For information on the permissions you need to use this API, see
 *             <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-authentication-and-access-control.html">Identity and
 *             access management</a> in the <i>Amazon SQS Developer Guide.</i>
 *          </p>
 *         <p>You can use <a href="http://aws.amazon.com/tools/#sdk">Amazon Web Services SDKs</a> to access Amazon SQS using your favorite programming language. The SDKs perform tasks such as the following automatically:</p>
 *         <ul>
 *             <li>
 *                 <p>Cryptographically sign your service requests</p>
 *             </li>
 *             <li>
 *                 <p>Retry requests</p>
 *             </li>
 *             <li>
 *                 <p>Handle error responses</p>
 *             </li>
 *          </ul>
 *
 *         <p>
 *             <b>Additional information</b>
 *          </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a href="http://aws.amazon.com/sqs/">Amazon SQS Product Page</a>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <i>Amazon SQS Developer Guide</i>
 *                </p>
 *                 <ul>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-making-api-requests.html">Making API Requests</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS Message Attributes</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Amazon SQS Dead-Letter Queues</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="http://docs.aws.amazon.com/cli/latest/reference/sqs/index.html">Amazon SQS in the <i>Command Line Interface</i>
 *                   </a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <i>Amazon Web Services General Reference</i>
 *                </p>
 *                 <ul>
 *                   <li>
 *                      <p>
 *                         <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#sqs_region">Regions and Endpoints</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 */
class SQSClient extends serdePlugin.Client {
    constructor(configuration) {
        let _config_0 = getRuntimeConfig(configuration);
        let _config_1 = defaultRoleAssumers.resolveRegionConfig(_config_0);
        let _config_2 = defaultRoleAssumers.resolveEndpointsConfig(_config_1);
        let _config_3 = defaultRoleAssumers.resolveRetryConfig(_config_2);
        let _config_4 = defaultRoleAssumers.resolveHostHeaderConfig(_config_3);
        let _config_5 = defaultRoleAssumers.resolveAwsAuthConfig(_config_4);
        let _config_6 = defaultRoleAssumers.resolveUserAgentConfig(_config_5);
        super(_config_6);
        this.config = _config_6;
        this.middlewareStack.use(defaultRoleAssumers.getRetryPlugin(this.config));
        this.middlewareStack.use(defaultRoleAssumers.getContentLengthPlugin(this.config));
        this.middlewareStack.use(defaultRoleAssumers.getHostHeaderPlugin(this.config));
        this.middlewareStack.use(defaultRoleAssumers.getLoggerPlugin(this.config));
        this.middlewareStack.use(defaultRoleAssumers.getAwsAuthPlugin(this.config));
        this.middlewareStack.use(defaultRoleAssumers.getUserAgentPlugin(this.config));
    }
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    destroy() {
        super.destroy();
    }
}

exports.SQSClient = SQSClient;
