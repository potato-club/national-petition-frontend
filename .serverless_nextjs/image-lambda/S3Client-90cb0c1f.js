'use strict';

var index = require('./index-b23fe19e.js');
var Url = require('url');
var buffer = require('buffer');
var http = require('http');
var fs = require('fs');
var os = require('os');
var require$$1 = require('path');
var crypto = require('crypto');
var https = require('https');
var Stream = require('stream');
require('http2');
var process$1 = require('process');
var child_process = require('child_process');
var imageHandler = require('./image-handler-e53f1482.js');
require('./manifest.json');
require('./routes-manifest.json');
require('perf_hooks');
require('zlib');
require('events');
require('util');
require('tty');
require('net');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var crypto__default = /*#__PURE__*/_interopDefaultLegacy(crypto);

var name$2 = "@aws-sdk/client-s3";
var description$2 = "AWS SDK for JavaScript S3 Client for Node.js, Browser and React Native";
var version$2 = "3.33.0";
var scripts$2 = {
	clean: "yarn remove-definitions && yarn remove-dist && yarn remove-documentation",
	"build-documentation": "yarn remove-documentation && typedoc ./",
	"remove-definitions": "rimraf ./types",
	"remove-dist": "rimraf ./dist",
	"remove-documentation": "rimraf ./docs",
	"test:unit": "mocha **/cjs/**/*.spec.js",
	"test:e2e": "mocha **/cjs/**/*.ispec.js && karma start karma.conf.js",
	test: "yarn test:unit",
	"build:cjs": "tsc -p tsconfig.json",
	"build:es": "tsc -p tsconfig.es.json",
	build: "yarn build:cjs && yarn build:es",
	"downlevel-dts": "downlevel-dts dist/types dist/types/ts3.4"
};
var main$2 = "./dist/cjs/index.js";
var types$2 = "./dist/types/index.d.ts";
var module$3 = "./dist/es/index.js";
var browser$2 = {
	"./runtimeConfig": "./runtimeConfig.browser"
};
var sideEffects$2 = false;
var dependencies$2 = {
	"@aws-crypto/sha256-browser": "^1.0.0",
	"@aws-crypto/sha256-js": "^1.0.0",
	"@aws-sdk/client-sts": "3.33.0",
	"@aws-sdk/config-resolver": "3.33.0",
	"@aws-sdk/credential-provider-node": "3.33.0",
	"@aws-sdk/eventstream-serde-browser": "3.32.0",
	"@aws-sdk/eventstream-serde-config-resolver": "3.32.0",
	"@aws-sdk/eventstream-serde-node": "3.32.0",
	"@aws-sdk/fetch-http-handler": "3.32.0",
	"@aws-sdk/hash-blob-browser": "3.32.0",
	"@aws-sdk/hash-node": "3.32.0",
	"@aws-sdk/hash-stream-node": "3.32.0",
	"@aws-sdk/invalid-dependency": "3.32.0",
	"@aws-sdk/md5-js": "3.32.0",
	"@aws-sdk/middleware-apply-body-checksum": "3.32.0",
	"@aws-sdk/middleware-bucket-endpoint": "3.33.0",
	"@aws-sdk/middleware-content-length": "3.32.0",
	"@aws-sdk/middleware-expect-continue": "3.32.0",
	"@aws-sdk/middleware-host-header": "3.32.0",
	"@aws-sdk/middleware-location-constraint": "3.32.0",
	"@aws-sdk/middleware-logger": "3.32.0",
	"@aws-sdk/middleware-retry": "3.32.0",
	"@aws-sdk/middleware-sdk-s3": "3.33.0",
	"@aws-sdk/middleware-serde": "3.32.0",
	"@aws-sdk/middleware-signing": "3.33.0",
	"@aws-sdk/middleware-ssec": "3.32.0",
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
	"@aws-sdk/util-waiter": "3.32.0",
	"@aws-sdk/xml-builder": "3.32.0",
	entities: "2.2.0",
	"fast-xml-parser": "3.19.0",
	tslib: "^2.3.0"
};
var devDependencies$2 = {
	"@aws-sdk/client-documentation-generator": "3.32.0",
	"@types/chai": "^4.2.11",
	"@types/mocha": "^8.0.4",
	"@types/node": "^12.7.5",
	"downlevel-dts": "0.7.0",
	jest: "^26.1.0",
	rimraf: "^3.0.0",
	"ts-jest": "^26.4.1",
	typedoc: "^0.19.2",
	typescript: "~4.3.5"
};
var engines$2 = {
	node: ">=10.0.0"
};
var typesVersions$2 = {
	"<4.0": {
		"dist/types/*": [
			"dist/types/ts3.4/*"
		]
	}
};
var author$2 = {
	name: "AWS SDK for JavaScript Team",
	url: "https://aws.amazon.com/javascript/"
};
var license$2 = "Apache-2.0";
var homepage$2 = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-s3";
var repository$2 = {
	type: "git",
	url: "https://github.com/aws/aws-sdk-js-v3.git",
	directory: "clients/client-s3"
};
var packageInfo$2 = {
	name: name$2,
	description: description$2,
	version: version$2,
	scripts: scripts$2,
	main: main$2,
	types: types$2,
	module: module$3,
	browser: browser$2,
	"react-native": {
	"./runtimeConfig": "./runtimeConfig.native"
},
	sideEffects: sideEffects$2,
	dependencies: dependencies$2,
	devDependencies: devDependencies$2,
	engines: engines$2,
	typesVersions: typesVersions$2,
	author: author$2,
	license: license$2,
	homepage: homepage$2,
	repository: repository$2
};

var name$1 = "@aws-sdk/client-sts";
var description$1 = "AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native";
var version$1 = "3.33.0";
var scripts$1 = {
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
var main$1 = "./dist/cjs/index.js";
var types$1 = "./dist/types/index.d.ts";
var module$2 = "./dist/es/index.js";
var browser$1 = {
	"./runtimeConfig": "./runtimeConfig.browser"
};
var sideEffects$1 = false;
var dependencies$1 = {
	"@aws-crypto/sha256-browser": "^1.0.0",
	"@aws-crypto/sha256-js": "^1.0.0",
	"@aws-sdk/config-resolver": "3.33.0",
	"@aws-sdk/credential-provider-node": "3.33.0",
	"@aws-sdk/fetch-http-handler": "3.32.0",
	"@aws-sdk/hash-node": "3.32.0",
	"@aws-sdk/invalid-dependency": "3.32.0",
	"@aws-sdk/middleware-content-length": "3.32.0",
	"@aws-sdk/middleware-host-header": "3.32.0",
	"@aws-sdk/middleware-logger": "3.32.0",
	"@aws-sdk/middleware-retry": "3.32.0",
	"@aws-sdk/middleware-sdk-sts": "3.33.0",
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
var devDependencies$1 = {
	"@aws-sdk/client-documentation-generator": "3.32.0",
	"@types/node": "^12.7.5",
	"downlevel-dts": "0.7.0",
	jest: "^26.1.0",
	rimraf: "^3.0.0",
	"ts-jest": "^26.4.1",
	typedoc: "^0.19.2",
	typescript: "~4.3.5"
};
var engines$1 = {
	node: ">=10.0.0"
};
var typesVersions$1 = {
	"<4.0": {
		"dist/types/*": [
			"dist/types/ts3.4/*"
		]
	}
};
var author$1 = {
	name: "AWS SDK for JavaScript Team",
	url: "https://aws.amazon.com/javascript/"
};
var license$1 = "Apache-2.0";
var homepage$1 = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts";
var repository$1 = {
	type: "git",
	url: "https://github.com/aws/aws-sdk-js-v3.git",
	directory: "clients/client-sts"
};
var packageInfo$1 = {
	name: name$1,
	description: description$1,
	version: version$1,
	scripts: scripts$1,
	main: main$1,
	types: types$1,
	module: module$2,
	browser: browser$1,
	"react-native": {
	"./runtimeConfig": "./runtimeConfig.native"
},
	sideEffects: sideEffects$1,
	dependencies: dependencies$1,
	devDependencies: devDependencies$1,
	engines: engines$1,
	typesVersions: typesVersions$1,
	author: author$1,
	license: license$1,
	homepage: homepage$1,
	repository: repository$1
};

var AssumedRoleUser;
(function (AssumedRoleUser) {
    /**
     * @internal
     */
    AssumedRoleUser.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(AssumedRoleUser || (AssumedRoleUser = {}));
var PolicyDescriptorType;
(function (PolicyDescriptorType) {
    /**
     * @internal
     */
    PolicyDescriptorType.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(PolicyDescriptorType || (PolicyDescriptorType = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(Tag || (Tag = {}));
var AssumeRoleRequest;
(function (AssumeRoleRequest) {
    /**
     * @internal
     */
    AssumeRoleRequest.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(AssumeRoleRequest || (AssumeRoleRequest = {}));
var Credentials;
(function (Credentials) {
    /**
     * @internal
     */
    Credentials.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(Credentials || (Credentials = {}));
var AssumeRoleResponse;
(function (AssumeRoleResponse) {
    /**
     * @internal
     */
    AssumeRoleResponse.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(AssumeRoleResponse || (AssumeRoleResponse = {}));
var ExpiredTokenException;
(function (ExpiredTokenException) {
    /**
     * @internal
     */
    ExpiredTokenException.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(ExpiredTokenException || (ExpiredTokenException = {}));
var MalformedPolicyDocumentException;
(function (MalformedPolicyDocumentException) {
    /**
     * @internal
     */
    MalformedPolicyDocumentException.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(MalformedPolicyDocumentException || (MalformedPolicyDocumentException = {}));
var PackedPolicyTooLargeException;
(function (PackedPolicyTooLargeException) {
    /**
     * @internal
     */
    PackedPolicyTooLargeException.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(PackedPolicyTooLargeException || (PackedPolicyTooLargeException = {}));
var RegionDisabledException;
(function (RegionDisabledException) {
    /**
     * @internal
     */
    RegionDisabledException.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(RegionDisabledException || (RegionDisabledException = {}));
var AssumeRoleWithSAMLRequest;
(function (AssumeRoleWithSAMLRequest) {
    /**
     * @internal
     */
    AssumeRoleWithSAMLRequest.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(AssumeRoleWithSAMLRequest || (AssumeRoleWithSAMLRequest = {}));
var AssumeRoleWithSAMLResponse;
(function (AssumeRoleWithSAMLResponse) {
    /**
     * @internal
     */
    AssumeRoleWithSAMLResponse.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(AssumeRoleWithSAMLResponse || (AssumeRoleWithSAMLResponse = {}));
var IDPRejectedClaimException;
(function (IDPRejectedClaimException) {
    /**
     * @internal
     */
    IDPRejectedClaimException.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(IDPRejectedClaimException || (IDPRejectedClaimException = {}));
var InvalidIdentityTokenException;
(function (InvalidIdentityTokenException) {
    /**
     * @internal
     */
    InvalidIdentityTokenException.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(InvalidIdentityTokenException || (InvalidIdentityTokenException = {}));
var AssumeRoleWithWebIdentityRequest;
(function (AssumeRoleWithWebIdentityRequest) {
    /**
     * @internal
     */
    AssumeRoleWithWebIdentityRequest.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(AssumeRoleWithWebIdentityRequest || (AssumeRoleWithWebIdentityRequest = {}));
var AssumeRoleWithWebIdentityResponse;
(function (AssumeRoleWithWebIdentityResponse) {
    /**
     * @internal
     */
    AssumeRoleWithWebIdentityResponse.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(AssumeRoleWithWebIdentityResponse || (AssumeRoleWithWebIdentityResponse = {}));
var IDPCommunicationErrorException;
(function (IDPCommunicationErrorException) {
    /**
     * @internal
     */
    IDPCommunicationErrorException.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(IDPCommunicationErrorException || (IDPCommunicationErrorException = {}));
var DecodeAuthorizationMessageRequest;
(function (DecodeAuthorizationMessageRequest) {
    /**
     * @internal
     */
    DecodeAuthorizationMessageRequest.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(DecodeAuthorizationMessageRequest || (DecodeAuthorizationMessageRequest = {}));
var DecodeAuthorizationMessageResponse;
(function (DecodeAuthorizationMessageResponse) {
    /**
     * @internal
     */
    DecodeAuthorizationMessageResponse.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(DecodeAuthorizationMessageResponse || (DecodeAuthorizationMessageResponse = {}));
var InvalidAuthorizationMessageException;
(function (InvalidAuthorizationMessageException) {
    /**
     * @internal
     */
    InvalidAuthorizationMessageException.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(InvalidAuthorizationMessageException || (InvalidAuthorizationMessageException = {}));
var GetAccessKeyInfoRequest;
(function (GetAccessKeyInfoRequest) {
    /**
     * @internal
     */
    GetAccessKeyInfoRequest.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(GetAccessKeyInfoRequest || (GetAccessKeyInfoRequest = {}));
var GetAccessKeyInfoResponse;
(function (GetAccessKeyInfoResponse) {
    /**
     * @internal
     */
    GetAccessKeyInfoResponse.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(GetAccessKeyInfoResponse || (GetAccessKeyInfoResponse = {}));
var GetCallerIdentityRequest;
(function (GetCallerIdentityRequest) {
    /**
     * @internal
     */
    GetCallerIdentityRequest.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(GetCallerIdentityRequest || (GetCallerIdentityRequest = {}));
var GetCallerIdentityResponse;
(function (GetCallerIdentityResponse) {
    /**
     * @internal
     */
    GetCallerIdentityResponse.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(GetCallerIdentityResponse || (GetCallerIdentityResponse = {}));
var GetFederationTokenRequest;
(function (GetFederationTokenRequest) {
    /**
     * @internal
     */
    GetFederationTokenRequest.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(GetFederationTokenRequest || (GetFederationTokenRequest = {}));
var FederatedUser;
(function (FederatedUser) {
    /**
     * @internal
     */
    FederatedUser.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(FederatedUser || (FederatedUser = {}));
var GetFederationTokenResponse;
(function (GetFederationTokenResponse) {
    /**
     * @internal
     */
    GetFederationTokenResponse.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(GetFederationTokenResponse || (GetFederationTokenResponse = {}));
var GetSessionTokenRequest;
(function (GetSessionTokenRequest) {
    /**
     * @internal
     */
    GetSessionTokenRequest.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(GetSessionTokenRequest || (GetSessionTokenRequest = {}));
var GetSessionTokenResponse;
(function (GetSessionTokenResponse) {
    /**
     * @internal
     */
    GetSessionTokenResponse.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(GetSessionTokenResponse || (GetSessionTokenResponse = {}));

// Stores whether the warning was already emitted.
var warningEmitted = false;
/**
 * Emits warning if the provided Node.js version string is pending deprecation.
 *
 * @param {string} version - The Node.js version string.
 */
var emitWarningIfUnsupportedVersion = function (version) {
    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 12) {
        warningEmitted = true;
        process.emitWarning("The AWS SDK for JavaScript (v3) will\n" +
            ("no longer support Node.js " + version + " as of January 1, 2022.\n") +
            "To continue receiving updates to AWS services, bug fixes, and security\n" +
            "updates please upgrade to Node.js 12.x or later.\n\n" +
            "More information can be found at: https://a.co/1l6FLnu", "NodeDeprecationWarning");
    }
};

var serializeAws_queryAssumeRoleCommand = function (input, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return index.__generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(index.__assign(index.__assign({}, serializeAws_queryAssumeRoleRequest(input, context)), { Action: "AssumeRole", Version: "2011-06-15" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
var serializeAws_queryAssumeRoleWithWebIdentityCommand = function (input, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return index.__generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(index.__assign(index.__assign({}, serializeAws_queryAssumeRoleWithWebIdentityRequest(input, context)), { Action: "AssumeRoleWithWebIdentity", Version: "2011-06-15" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
var deserializeAws_queryAssumeRoleCommand = function (output, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return index.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAssumeRoleCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody$1(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryAssumeRoleResponse(data.AssumeRoleResult, context);
                response = index.__assign({ $metadata: deserializeMetadata$1(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryAssumeRoleCommandError = function (output, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return index.__generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [index.__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody$1(output.body, context)];
            case 1:
                parsedOutput = index.__assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ExpiredTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.sts#ExpiredTokenException": return [3 /*break*/, 2];
                    case "MalformedPolicyDocumentException": return [3 /*break*/, 4];
                    case "com.amazonaws.sts#MalformedPolicyDocumentException": return [3 /*break*/, 4];
                    case "PackedPolicyTooLargeException": return [3 /*break*/, 6];
                    case "com.amazonaws.sts#PackedPolicyTooLargeException": return [3 /*break*/, 6];
                    case "RegionDisabledException": return [3 /*break*/, 8];
                    case "com.amazonaws.sts#RegionDisabledException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryExpiredTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = index.__assign.apply(void 0, [index.__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata$1(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)];
            case 5:
                response = index.__assign.apply(void 0, [index.__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata$1(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context)];
            case 7:
                response = index.__assign.apply(void 0, [index.__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata$1(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context)];
            case 9:
                response = index.__assign.apply(void 0, [index.__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata$1(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = index.__assign(index.__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata$1(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_queryAssumeRoleWithWebIdentityCommand = function (output, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return index.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAssumeRoleWithWebIdentityCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody$1(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryAssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
                response = index.__assign({ $metadata: deserializeMetadata$1(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryAssumeRoleWithWebIdentityCommandError = function (output, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return index.__generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [index.__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody$1(output.body, context)];
            case 1:
                parsedOutput = index.__assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ExpiredTokenException": return [3 /*break*/, 2];
                    case "com.amazonaws.sts#ExpiredTokenException": return [3 /*break*/, 2];
                    case "IDPCommunicationErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.sts#IDPCommunicationErrorException": return [3 /*break*/, 4];
                    case "IDPRejectedClaimException": return [3 /*break*/, 6];
                    case "com.amazonaws.sts#IDPRejectedClaimException": return [3 /*break*/, 6];
                    case "InvalidIdentityTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.sts#InvalidIdentityTokenException": return [3 /*break*/, 8];
                    case "MalformedPolicyDocumentException": return [3 /*break*/, 10];
                    case "com.amazonaws.sts#MalformedPolicyDocumentException": return [3 /*break*/, 10];
                    case "PackedPolicyTooLargeException": return [3 /*break*/, 12];
                    case "com.amazonaws.sts#PackedPolicyTooLargeException": return [3 /*break*/, 12];
                    case "RegionDisabledException": return [3 /*break*/, 14];
                    case "com.amazonaws.sts#RegionDisabledException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryExpiredTokenExceptionResponse(parsedOutput, context)];
            case 3:
                response = index.__assign.apply(void 0, [index.__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata$1(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryIDPCommunicationErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = index.__assign.apply(void 0, [index.__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata$1(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryIDPRejectedClaimExceptionResponse(parsedOutput, context)];
            case 7:
                response = index.__assign.apply(void 0, [index.__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata$1(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidIdentityTokenExceptionResponse(parsedOutput, context)];
            case 9:
                response = index.__assign.apply(void 0, [index.__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata$1(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)];
            case 11:
                response = index.__assign.apply(void 0, [index.__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata$1(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context)];
            case 13:
                response = index.__assign.apply(void 0, [index.__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata$1(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context)];
            case 15:
                response = index.__assign.apply(void 0, [index.__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata$1(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = index.__assign(index.__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata$1(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_queryExpiredTokenExceptionResponse = function (parsedOutput, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return index.__generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryExpiredTokenException(body.Error, context);
        contents = index.__assign({ name: "ExpiredTokenException", $fault: "client", $metadata: deserializeMetadata$1(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryIDPCommunicationErrorExceptionResponse = function (parsedOutput, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return index.__generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryIDPCommunicationErrorException(body.Error, context);
        contents = index.__assign({ name: "IDPCommunicationErrorException", $fault: "client", $metadata: deserializeMetadata$1(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryIDPRejectedClaimExceptionResponse = function (parsedOutput, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return index.__generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryIDPRejectedClaimException(body.Error, context);
        contents = index.__assign({ name: "IDPRejectedClaimException", $fault: "client", $metadata: deserializeMetadata$1(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidIdentityTokenExceptionResponse = function (parsedOutput, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return index.__generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidIdentityTokenException(body.Error, context);
        contents = index.__assign({ name: "InvalidIdentityTokenException", $fault: "client", $metadata: deserializeMetadata$1(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryMalformedPolicyDocumentExceptionResponse = function (parsedOutput, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return index.__generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryMalformedPolicyDocumentException(body.Error, context);
        contents = index.__assign({ name: "MalformedPolicyDocumentException", $fault: "client", $metadata: deserializeMetadata$1(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryPackedPolicyTooLargeExceptionResponse = function (parsedOutput, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return index.__generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryPackedPolicyTooLargeException(body.Error, context);
        contents = index.__assign({ name: "PackedPolicyTooLargeException", $fault: "client", $metadata: deserializeMetadata$1(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryRegionDisabledExceptionResponse = function (parsedOutput, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return index.__generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryRegionDisabledException(body.Error, context);
        contents = index.__assign({ name: "RegionDisabledException", $fault: "client", $metadata: deserializeMetadata$1(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_queryAssumeRoleRequest = function (input, context) {
    var entries = {};
    if (input.RoleArn !== undefined && input.RoleArn !== null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.RoleSessionName !== undefined && input.RoleSessionName !== null) {
        entries["RoleSessionName"] = input.RoleSessionName;
    }
    if (input.PolicyArns !== undefined && input.PolicyArns !== null) {
        var memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = index.__read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PolicyArns." + key;
            entries[loc] = value;
        });
    }
    if (input.Policy !== undefined && input.Policy !== null) {
        entries["Policy"] = input.Policy;
    }
    if (input.DurationSeconds !== undefined && input.DurationSeconds !== null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        var memberEntries = serializeAws_querytagListType(input.Tags, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = index.__read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Tags." + key;
            entries[loc] = value;
        });
    }
    if (input.TransitiveTagKeys !== undefined && input.TransitiveTagKeys !== null) {
        var memberEntries = serializeAws_querytagKeyListType(input.TransitiveTagKeys, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = index.__read(_a, 2), key = _b[0], value = _b[1];
            var loc = "TransitiveTagKeys." + key;
            entries[loc] = value;
        });
    }
    if (input.ExternalId !== undefined && input.ExternalId !== null) {
        entries["ExternalId"] = input.ExternalId;
    }
    if (input.SerialNumber !== undefined && input.SerialNumber !== null) {
        entries["SerialNumber"] = input.SerialNumber;
    }
    if (input.TokenCode !== undefined && input.TokenCode !== null) {
        entries["TokenCode"] = input.TokenCode;
    }
    if (input.SourceIdentity !== undefined && input.SourceIdentity !== null) {
        entries["SourceIdentity"] = input.SourceIdentity;
    }
    return entries;
};
var serializeAws_queryAssumeRoleWithWebIdentityRequest = function (input, context) {
    var entries = {};
    if (input.RoleArn !== undefined && input.RoleArn !== null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.RoleSessionName !== undefined && input.RoleSessionName !== null) {
        entries["RoleSessionName"] = input.RoleSessionName;
    }
    if (input.WebIdentityToken !== undefined && input.WebIdentityToken !== null) {
        entries["WebIdentityToken"] = input.WebIdentityToken;
    }
    if (input.ProviderId !== undefined && input.ProviderId !== null) {
        entries["ProviderId"] = input.ProviderId;
    }
    if (input.PolicyArns !== undefined && input.PolicyArns !== null) {
        var memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = index.__read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PolicyArns." + key;
            entries[loc] = value;
        });
    }
    if (input.Policy !== undefined && input.Policy !== null) {
        entries["Policy"] = input.Policy;
    }
    if (input.DurationSeconds !== undefined && input.DurationSeconds !== null) {
        entries["DurationSeconds"] = input.DurationSeconds;
    }
    return entries;
};
var serializeAws_querypolicyDescriptorListType = function (input, context) {
    var e_1, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_1 = index.__values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
            var entry = input_1_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryPolicyDescriptorType(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = index.__read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (input_1_1 && !input_1_1.done && (_a = input_1.return)) _a.call(input_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return entries;
};
var serializeAws_queryPolicyDescriptorType = function (input, context) {
    var entries = {};
    if (input.arn !== undefined && input.arn !== null) {
        entries["arn"] = input.arn;
    }
    return entries;
};
var serializeAws_queryTag = function (input, context) {
    var entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
var serializeAws_querytagKeyListType = function (input, context) {
    var e_2, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_2 = index.__values(input), input_2_1 = input_2.next(); !input_2_1.done; input_2_1 = input_2.next()) {
            var entry = input_2_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (input_2_1 && !input_2_1.done && (_a = input_2.return)) _a.call(input_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return entries;
};
var serializeAws_querytagListType = function (input, context) {
    var e_3, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_3 = index.__values(input), input_3_1 = input_3.next(); !input_3_1.done; input_3_1 = input_3.next()) {
            var entry = input_3_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryTag(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = index.__read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (input_3_1 && !input_3_1.done && (_a = input_3.return)) _a.call(input_3);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return entries;
};
var deserializeAws_queryAssumedRoleUser = function (output, context) {
    var contents = {
        AssumedRoleId: undefined,
        Arn: undefined,
    };
    if (output["AssumedRoleId"] !== undefined) {
        contents.AssumedRoleId = index.expectString(output["AssumedRoleId"]);
    }
    if (output["Arn"] !== undefined) {
        contents.Arn = index.expectString(output["Arn"]);
    }
    return contents;
};
var deserializeAws_queryAssumeRoleResponse = function (output, context) {
    var contents = {
        Credentials: undefined,
        AssumedRoleUser: undefined,
        PackedPolicySize: undefined,
        SourceIdentity: undefined,
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    if (output["AssumedRoleUser"] !== undefined) {
        contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(output["AssumedRoleUser"]);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = index.strictParseInt32(output["PackedPolicySize"]);
    }
    if (output["SourceIdentity"] !== undefined) {
        contents.SourceIdentity = index.expectString(output["SourceIdentity"]);
    }
    return contents;
};
var deserializeAws_queryAssumeRoleWithWebIdentityResponse = function (output, context) {
    var contents = {
        Credentials: undefined,
        SubjectFromWebIdentityToken: undefined,
        AssumedRoleUser: undefined,
        PackedPolicySize: undefined,
        Provider: undefined,
        Audience: undefined,
        SourceIdentity: undefined,
    };
    if (output["Credentials"] !== undefined) {
        contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
    }
    if (output["SubjectFromWebIdentityToken"] !== undefined) {
        contents.SubjectFromWebIdentityToken = index.expectString(output["SubjectFromWebIdentityToken"]);
    }
    if (output["AssumedRoleUser"] !== undefined) {
        contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(output["AssumedRoleUser"]);
    }
    if (output["PackedPolicySize"] !== undefined) {
        contents.PackedPolicySize = index.strictParseInt32(output["PackedPolicySize"]);
    }
    if (output["Provider"] !== undefined) {
        contents.Provider = index.expectString(output["Provider"]);
    }
    if (output["Audience"] !== undefined) {
        contents.Audience = index.expectString(output["Audience"]);
    }
    if (output["SourceIdentity"] !== undefined) {
        contents.SourceIdentity = index.expectString(output["SourceIdentity"]);
    }
    return contents;
};
var deserializeAws_queryCredentials = function (output, context) {
    var contents = {
        AccessKeyId: undefined,
        SecretAccessKey: undefined,
        SessionToken: undefined,
        Expiration: undefined,
    };
    if (output["AccessKeyId"] !== undefined) {
        contents.AccessKeyId = index.expectString(output["AccessKeyId"]);
    }
    if (output["SecretAccessKey"] !== undefined) {
        contents.SecretAccessKey = index.expectString(output["SecretAccessKey"]);
    }
    if (output["SessionToken"] !== undefined) {
        contents.SessionToken = index.expectString(output["SessionToken"]);
    }
    if (output["Expiration"] !== undefined) {
        contents.Expiration = index.expectNonNull(index.parseRfc3339DateTime(output["Expiration"]));
    }
    return contents;
};
var deserializeAws_queryExpiredTokenException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = index.expectString(output["message"]);
    }
    return contents;
};
var deserializeAws_queryIDPCommunicationErrorException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = index.expectString(output["message"]);
    }
    return contents;
};
var deserializeAws_queryIDPRejectedClaimException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = index.expectString(output["message"]);
    }
    return contents;
};
var deserializeAws_queryInvalidIdentityTokenException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = index.expectString(output["message"]);
    }
    return contents;
};
var deserializeAws_queryMalformedPolicyDocumentException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = index.expectString(output["message"]);
    }
    return contents;
};
var deserializeAws_queryPackedPolicyTooLargeException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = index.expectString(output["message"]);
    }
    return contents;
};
var deserializeAws_queryRegionDisabledException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = index.expectString(output["message"]);
    }
    return contents;
};
var deserializeMetadata$1 = function (output) {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
var collectBody$1 = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString$1 = function (streamBody, context) {
    return collectBody$1(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var buildHttpRpcRequest = function (context, headers, path, resolvedHostname, body) { return index.__awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, contents;
    return index.__generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                contents = {
                    protocol: protocol,
                    hostname: hostname,
                    port: port,
                    method: "POST",
                    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
                    headers: headers,
                };
                if (resolvedHostname !== undefined) {
                    contents.hostname = resolvedHostname;
                }
                if (body !== undefined) {
                    contents.body = body;
                }
                return [2 /*return*/, new index.HttpRequest(contents)];
        }
    });
}); };
var parseBody$1 = function (streamBody, context) {
    return collectBodyString$1(streamBody, context).then(function (encoded) {
        if (encoded.length) {
            var parsedObj = index.parser.parse(encoded, {
                attributeNamePrefix: "",
                ignoreAttributes: false,
                parseNodeValue: false,
                trimValues: false,
                tagValueProcessor: function (val) { return (val.trim() === "" && val.includes("\n") ? "" : index.lib.decodeHTML(val)); },
            });
            var textNodeName = "#text";
            var key = Object.keys(parsedObj)[0];
            var parsedObjToReturn = parsedObj[key];
            if (parsedObjToReturn[textNodeName]) {
                parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
                delete parsedObjToReturn[textNodeName];
            }
            return index.getValueFromTextNode(parsedObjToReturn);
        }
        return {};
    });
};
var buildFormUrlencodedString = function (formEntries) {
    return Object.entries(formEntries)
        .map(function (_a) {
        var _b = index.__read(_a, 2), key = _b[0], value = _b[1];
        return index.extendedEncodeURIComponent(key) + "=" + index.extendedEncodeURIComponent(value);
    })
        .join("&");
};
var loadQueryErrorCode = function (output, data) {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};

/**
 * An error representing a failure of an individual credential provider.
 *
 * This error class has special meaning to the {@link chain} method. If a
 * provider in the chain is rejected with an error, the chain will only proceed
 * to the next provider if the value of the `tryNextLink` property on the error
 * is truthy. This allows individual providers to halt the chain and also
 * ensures the chain will stop if an entirely unexpected error is encountered.
 *
 * @deprecated
 */
var ProviderError = /** @class */ (function (_super) {
    index.__extends(ProviderError, _super);
    function ProviderError(message, tryNextLink) {
        if (tryNextLink === void 0) { tryNextLink = true; }
        var _this = _super.call(this, message) || this;
        _this.tryNextLink = tryNextLink;
        return _this;
    }
    ProviderError.from = function (error, tryNextLink) {
        if (tryNextLink === void 0) { tryNextLink = true; }
        Object.defineProperty(error, "tryNextLink", {
            value: tryNextLink,
            configurable: false,
            enumerable: false,
            writable: false,
        });
        return error;
    };
    return ProviderError;
}(Error));
/**
 * An error representing a failure of an individual credential provider.
 *
 * This error class has special meaning to the {@link chain} method. If a
 * provider in the chain is rejected with an error, the chain will only proceed
 * to the next provider if the value of the `tryNextLink` property on the error
 * is truthy. This allows individual providers to halt the chain and also
 * ensures the chain will stop if an entirely unexpected error is encountered.
 */
var CredentialsProviderError = /** @class */ (function (_super) {
    index.__extends(CredentialsProviderError, _super);
    function CredentialsProviderError(message, tryNextLink) {
        if (tryNextLink === void 0) { tryNextLink = true; }
        var _this = _super.call(this, message) || this;
        _this.tryNextLink = tryNextLink;
        _this.name = "CredentialsProviderError";
        return _this;
    }
    CredentialsProviderError.from = function (error, tryNextLink) {
        if (tryNextLink === void 0) { tryNextLink = true; }
        Object.defineProperty(error, "tryNextLink", {
            value: tryNextLink,
            configurable: false,
            enumerable: false,
            writable: false,
        });
        return error;
    };
    return CredentialsProviderError;
}(Error));

/**
 * Compose a single credential provider function from multiple credential
 * providers. The first provider in the argument list will always be invoked;
 * subsequent providers in the list will be invoked in the order in which the
 * were received if the preceding provider did not successfully resolve.
 *
 * If no providers were received or no provider resolves successfully, the
 * returned promise will be rejected.
 */
function chain() {
    var providers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        providers[_i] = arguments[_i];
    }
    return function () {
        var e_1, _a;
        var promise = Promise.reject(new ProviderError("No providers in chain"));
        var _loop_1 = function (provider) {
            promise = promise.catch(function (err) {
                if (err === null || err === void 0 ? void 0 : err.tryNextLink) {
                    return provider();
                }
                throw err;
            });
        };
        try {
            for (var providers_1 = index.__values(providers), providers_1_1 = providers_1.next(); !providers_1_1.done; providers_1_1 = providers_1.next()) {
                var provider = providers_1_1.value;
                _loop_1(provider);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (providers_1_1 && !providers_1_1.done && (_a = providers_1.return)) _a.call(providers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return promise;
    };
}

var fromStatic$1 = function (staticValue) {
    return function () {
        return Promise.resolve(staticValue);
    };
};

var memoize = function (provider, isExpired, requiresRefresh) {
    var resolved;
    var pending;
    var hasResult;
    // Wrapper over supplied provider with side effect to handle concurrent invocation.
    var coalesceProvider = function () { return index.__awaiter(void 0, void 0, void 0, function () {
        return index.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!pending) {
                        pending = provider();
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 3, 4]);
                    return [4 /*yield*/, pending];
                case 2:
                    resolved = _a.sent();
                    hasResult = true;
                    return [3 /*break*/, 4];
                case 3:
                    pending = undefined;
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/, resolved];
            }
        });
    }); };
    if (isExpired === undefined) {
        // This is a static memoization; no need to incorporate refreshing
        return function () { return index.__awaiter(void 0, void 0, void 0, function () {
            return index.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!hasResult) return [3 /*break*/, 2];
                        return [4 /*yield*/, coalesceProvider()];
                    case 1:
                        resolved = _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, resolved];
                }
            });
        }); };
    }
    var isConstant = false;
    return function () { return index.__awaiter(void 0, void 0, void 0, function () {
        return index.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!hasResult) return [3 /*break*/, 2];
                    return [4 /*yield*/, coalesceProvider()];
                case 1:
                    resolved = _a.sent();
                    _a.label = 2;
                case 2:
                    if (isConstant) {
                        return [2 /*return*/, resolved];
                    }
                    if (requiresRefresh && !requiresRefresh(resolved)) {
                        isConstant = true;
                        return [2 /*return*/, resolved];
                    }
                    if (!isExpired(resolved)) return [3 /*break*/, 4];
                    return [4 /*yield*/, coalesceProvider()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, resolved];
                case 4: return [2 /*return*/, resolved];
            }
        });
    }); };
};

var SHORT_TO_HEX = {};
var HEX_TO_SHORT = {};
for (var i = 0; i < 256; i++) {
    var encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = "0" + encodedByte;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
/**
 * Converts a hexadecimal encoded string to a Uint8Array of bytes.
 *
 * @param encoded The hexadecimal encoded string
 */
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    var out = new Uint8Array(encoded.length / 2);
    for (var i = 0; i < encoded.length; i += 2) {
        var encodedByte = encoded.substr(i, 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        }
        else {
            throw new Error("Cannot decode unrecognized sequence " + encodedByte + " as hexadecimal");
        }
    }
    return out;
}
/**
 * Converts a Uint8Array of binary data to a hexadecimal encoded string.
 *
 * @param bytes The binary data to encode
 */
function toHex(bytes) {
    var out = "";
    for (var i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}

var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
var AUTH_HEADER = "authorization";
var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
var DATE_HEADER = "date";
var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
var SHA256_HEADER = "x-amz-content-sha256";
var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
var ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true,
};
var PROXY_HEADER_PATTERN = /^proxy-/;
var SEC_HEADER_PATTERN = /^sec-/;
var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
var MAX_CACHE_SIZE = 50;
var KEY_TYPE_IDENTIFIER = "aws4_request";
var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;

var signingKeyCache = {};
var cacheQueue = [];
/**
 * Create a string describing the scope of credentials used to sign a request.
 *
 * @param shortDate The current calendar date in the form YYYYMMDD.
 * @param region    The AWS region in which the service resides.
 * @param service   The service to which the signed request is being sent.
 */
var createScope = function (shortDate, region, service) {
    return shortDate + "/" + region + "/" + service + "/" + KEY_TYPE_IDENTIFIER;
};
/**
 * Derive a signing key from its composite parts
 *
 * @param sha256Constructor A constructor function that can instantiate SHA-256
 *                          hash objects.
 * @param credentials       The credentials with which the request will be
 *                          signed.
 * @param shortDate         The current calendar date in the form YYYYMMDD.
 * @param region            The AWS region in which the service resides.
 * @param service           The service to which the signed request is being
 *                          sent.
 */
var getSigningKey = function (sha256Constructor, credentials, shortDate, region, service) { return index.__awaiter(void 0, void 0, void 0, function () {
    var credsHash, cacheKey, key, _a, _b, signable, e_1_1;
    var e_1, _c;
    return index.__generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId)];
            case 1:
                credsHash = _d.sent();
                cacheKey = shortDate + ":" + region + ":" + service + ":" + toHex(credsHash) + ":" + credentials.sessionToken;
                if (cacheKey in signingKeyCache) {
                    return [2 /*return*/, signingKeyCache[cacheKey]];
                }
                cacheQueue.push(cacheKey);
                while (cacheQueue.length > MAX_CACHE_SIZE) {
                    delete signingKeyCache[cacheQueue.shift()];
                }
                key = "AWS4" + credentials.secretAccessKey;
                _d.label = 2;
            case 2:
                _d.trys.push([2, 7, 8, 9]);
                _a = index.__values([shortDate, region, service, KEY_TYPE_IDENTIFIER]), _b = _a.next();
                _d.label = 3;
            case 3:
                if (!!_b.done) return [3 /*break*/, 6];
                signable = _b.value;
                return [4 /*yield*/, hmac(sha256Constructor, key, signable)];
            case 4:
                key = _d.sent();
                _d.label = 5;
            case 5:
                _b = _a.next();
                return [3 /*break*/, 3];
            case 6: return [3 /*break*/, 9];
            case 7:
                e_1_1 = _d.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 9];
            case 8:
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 9: return [2 /*return*/, (signingKeyCache[cacheKey] = key)];
        }
    });
}); };
var hmac = function (ctor, secret, data) {
    var hash = new ctor(secret);
    hash.update(data);
    return hash.digest();
};

/**
 * @private
 */
var getCanonicalHeaders = function (_a, unsignableHeaders, signableHeaders) {
    var e_1, _b;
    var headers = _a.headers;
    var canonical = {};
    try {
        for (var _c = index.__values(Object.keys(headers).sort()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var headerName = _d.value;
            var canonicalHeaderName = headerName.toLowerCase();
            if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS ||
                (unsignableHeaders === null || unsignableHeaders === void 0 ? void 0 : unsignableHeaders.has(canonicalHeaderName)) ||
                PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
                SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
                if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
                    continue;
                }
            }
            canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return canonical;
};

var escapeUri = function (uri) {
    // AWS percent-encodes some extra non-standard characters in a URI
    return encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
};
var hexEncode = function (c) { return "%" + c.charCodeAt(0).toString(16).toUpperCase(); };

/**
 * @private
 */
var getCanonicalQuery = function (_a) {
    var e_1, _b;
    var _c = _a.query, query = _c === void 0 ? {} : _c;
    var keys = [];
    var serialized = {};
    var _loop_1 = function (key) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
            return "continue";
        }
        keys.push(key);
        var value = query[key];
        if (typeof value === "string") {
            serialized[key] = escapeUri(key) + "=" + escapeUri(value);
        }
        else if (Array.isArray(value)) {
            serialized[key] = value
                .slice(0)
                .sort()
                .reduce(function (encoded, value) { return encoded.concat([escapeUri(key) + "=" + escapeUri(value)]); }, [])
                .join("&");
        }
    };
    try {
        for (var _d = index.__values(Object.keys(query).sort()), _e = _d.next(); !_e.done; _e = _d.next()) {
            var key = _e.value;
            _loop_1(key);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return keys
        .map(function (key) { return serialized[key]; })
        .filter(function (serialized) { return serialized; }) // omit any falsy values
        .join("&");
};

var isArrayBuffer = function (arg) {
    return (typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
        Object.prototype.toString.call(arg) === "[object ArrayBuffer]";
};

/**
 * @private
 */
var getPayloadHash = function (_a, hashConstructor) {
    var headers = _a.headers, body = _a.body;
    return index.__awaiter(void 0, void 0, void 0, function () {
        var _b, _c, headerName, hashCtor, _d;
        var e_1, _e;
        return index.__generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    try {
                        for (_b = index.__values(Object.keys(headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            headerName = _c.value;
                            if (headerName.toLowerCase() === SHA256_HEADER) {
                                return [2 /*return*/, headers[headerName]];
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_e = _b.return)) _e.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    if (!(body == undefined)) return [3 /*break*/, 1];
                    return [2 /*return*/, "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"];
                case 1:
                    if (!(typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body))) return [3 /*break*/, 3];
                    hashCtor = new hashConstructor();
                    hashCtor.update(body);
                    _d = toHex;
                    return [4 /*yield*/, hashCtor.digest()];
                case 2: return [2 /*return*/, _d.apply(void 0, [_f.sent()])];
                case 3: 
                // As any defined body that is not a string or binary data is a stream, this
                // body is unsignable. Attempt to send the request with an unsigned payload,
                // which may or may not be accepted by the service.
                return [2 /*return*/, UNSIGNED_PAYLOAD];
            }
        });
    });
};

/**
 * @internal
 */
var cloneRequest = function (_a) {
    var headers = _a.headers, query = _a.query, rest = index.__rest(_a, ["headers", "query"]);
    return (index.__assign(index.__assign({}, rest), { headers: index.__assign({}, headers), query: query ? cloneQuery(query) : undefined }));
};
var cloneQuery = function (query) {
    return Object.keys(query).reduce(function (carry, paramName) {
        var _a;
        var param = query[paramName];
        return index.__assign(index.__assign({}, carry), (_a = {}, _a[paramName] = Array.isArray(param) ? index.__spreadArray([], index.__read(param)) : param, _a));
    }, {});
};

/**
 * @private
 */
var moveHeadersToQuery = function (request, options) {
    var e_1, _a;
    var _b;
    if (options === void 0) { options = {}; }
    var _c = typeof request.clone === "function" ? request.clone() : cloneRequest(request), headers = _c.headers, _d = _c.query, query = _d === void 0 ? {} : _d;
    try {
        for (var _e = index.__values(Object.keys(headers)), _f = _e.next(); !_f.done; _f = _e.next()) {
            var name = _f.value;
            var lname = name.toLowerCase();
            if (lname.substr(0, 6) === "x-amz-" && !((_b = options.unhoistableHeaders) === null || _b === void 0 ? void 0 : _b.has(lname))) {
                query[name] = headers[name];
                delete headers[name];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return index.__assign(index.__assign({}, request), { headers: headers, query: query });
};

/**
 * @private
 */
var prepareRequest = function (request) {
    var e_1, _a;
    // Create a clone of the request object that does not clone the body
    request = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
    try {
        for (var _b = index.__values(Object.keys(request.headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var headerName = _c.value;
            if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
                delete request.headers[headerName];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return request;
};

/**
 * @private
 */
var normalizeRegionProvider = function (region) {
    if (typeof region === "string") {
        var promisified_1 = Promise.resolve(region);
        return function () { return promisified_1; };
    }
    else {
        return region;
    }
};
/**
 * @private
 */
var normalizeCredentialsProvider = function (credentials) {
    if (typeof credentials === "object") {
        var promisified_2 = Promise.resolve(credentials);
        return function () { return promisified_2; };
    }
    else {
        return credentials;
    }
};

var hasHeader = function (soughtHeader, headers) {
    var e_1, _a;
    soughtHeader = soughtHeader.toLowerCase();
    try {
        for (var _b = index.__values(Object.keys(headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var headerName = _c.value;
            if (soughtHeader === headerName.toLowerCase()) {
                return true;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return false;
};

var iso8601 = function (time) {
    return toDate(time)
        .toISOString()
        .replace(/\.\d{3}Z$/, "Z");
};
var toDate = function (time) {
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
};

var SignatureV4 = /** @class */ (function () {
    function SignatureV4(_a) {
        var applyChecksum = _a.applyChecksum, credentials = _a.credentials, region = _a.region, service = _a.service, sha256 = _a.sha256, _b = _a.uriEscapePath, uriEscapePath = _b === void 0 ? true : _b;
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        // default to true if applyChecksum isn't set
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = normalizeRegionProvider(region);
        this.credentialProvider = normalizeCredentialsProvider(credentials);
    }
    SignatureV4.prototype.presign = function (originalRequest, options) {
        if (options === void 0) { options = {}; }
        return index.__awaiter(this, void 0, void 0, function () {
            var _a, signingDate, _b, expiresIn, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService, credentials, region, _c, _d, longDate, shortDate, scope, request, canonicalHeaders, _e, _f, _g, _h, _j, _k;
            return index.__generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        _a = options.signingDate, signingDate = _a === void 0 ? new Date() : _a, _b = options.expiresIn, expiresIn = _b === void 0 ? 3600 : _b, unsignableHeaders = options.unsignableHeaders, unhoistableHeaders = options.unhoistableHeaders, signableHeaders = options.signableHeaders, signingRegion = options.signingRegion, signingService = options.signingService;
                        return [4 /*yield*/, this.credentialProvider()];
                    case 1:
                        credentials = _l.sent();
                        if (!(signingRegion !== null && signingRegion !== void 0)) return [3 /*break*/, 2];
                        _c = signingRegion;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.regionProvider()];
                    case 3:
                        _c = (_l.sent());
                        _l.label = 4;
                    case 4:
                        region = _c;
                        _d = formatDate(signingDate), longDate = _d.longDate, shortDate = _d.shortDate;
                        if (expiresIn > MAX_PRESIGNED_TTL) {
                            return [2 /*return*/, Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future")];
                        }
                        scope = createScope(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
                        request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders: unhoistableHeaders });
                        if (credentials.sessionToken) {
                            request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
                        }
                        request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
                        request.query[CREDENTIAL_QUERY_PARAM] = credentials.accessKeyId + "/" + scope;
                        request.query[AMZ_DATE_QUERY_PARAM] = longDate;
                        request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
                        canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
                        request.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
                        _e = request.query;
                        _f = SIGNATURE_QUERY_PARAM;
                        _g = this.getSignature;
                        _h = [longDate,
                            scope,
                            this.getSigningKey(credentials, region, shortDate, signingService)];
                        _j = this.createCanonicalRequest;
                        _k = [request, canonicalHeaders];
                        return [4 /*yield*/, getPayloadHash(originalRequest, this.sha256)];
                    case 5: return [4 /*yield*/, _g.apply(this, _h.concat([_j.apply(this, _k.concat([_l.sent()]))]))];
                    case 6:
                        _e[_f] = _l.sent();
                        return [2 /*return*/, request];
                }
            });
        });
    };
    SignatureV4.prototype.sign = function (toSign, options) {
        return index.__awaiter(this, void 0, void 0, function () {
            return index.__generator(this, function (_a) {
                if (typeof toSign === "string") {
                    return [2 /*return*/, this.signString(toSign, options)];
                }
                else if (toSign.headers && toSign.payload) {
                    return [2 /*return*/, this.signEvent(toSign, options)];
                }
                else {
                    return [2 /*return*/, this.signRequest(toSign, options)];
                }
            });
        });
    };
    SignatureV4.prototype.signEvent = function (_a, _b) {
        var headers = _a.headers, payload = _a.payload;
        var _c = _b.signingDate, signingDate = _c === void 0 ? new Date() : _c, priorSignature = _b.priorSignature, signingRegion = _b.signingRegion, signingService = _b.signingService;
        return index.__awaiter(this, void 0, void 0, function () {
            var region, _d, _e, shortDate, longDate, scope, hashedPayload, hash, hashedHeaders, _f, stringToSign;
            return index.__generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (!(signingRegion !== null && signingRegion !== void 0)) return [3 /*break*/, 1];
                        _d = signingRegion;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.regionProvider()];
                    case 2:
                        _d = (_g.sent());
                        _g.label = 3;
                    case 3:
                        region = _d;
                        _e = formatDate(signingDate), shortDate = _e.shortDate, longDate = _e.longDate;
                        scope = createScope(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
                        return [4 /*yield*/, getPayloadHash({ headers: {}, body: payload }, this.sha256)];
                    case 4:
                        hashedPayload = _g.sent();
                        hash = new this.sha256();
                        hash.update(headers);
                        _f = toHex;
                        return [4 /*yield*/, hash.digest()];
                    case 5:
                        hashedHeaders = _f.apply(void 0, [_g.sent()]);
                        stringToSign = [
                            EVENT_ALGORITHM_IDENTIFIER,
                            longDate,
                            scope,
                            priorSignature,
                            hashedHeaders,
                            hashedPayload,
                        ].join("\n");
                        return [2 /*return*/, this.signString(stringToSign, { signingDate: signingDate, signingRegion: region, signingService: signingService })];
                }
            });
        });
    };
    SignatureV4.prototype.signString = function (stringToSign, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.signingDate, signingDate = _c === void 0 ? new Date() : _c, signingRegion = _b.signingRegion, signingService = _b.signingService;
        return index.__awaiter(this, void 0, void 0, function () {
            var credentials, region, _d, shortDate, hash, _e, _f, _g;
            return index.__generator(this, function (_h) {
                switch (_h.label) {
                    case 0: return [4 /*yield*/, this.credentialProvider()];
                    case 1:
                        credentials = _h.sent();
                        if (!(signingRegion !== null && signingRegion !== void 0)) return [3 /*break*/, 2];
                        _d = signingRegion;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.regionProvider()];
                    case 3:
                        _d = (_h.sent());
                        _h.label = 4;
                    case 4:
                        region = _d;
                        shortDate = formatDate(signingDate).shortDate;
                        _f = (_e = this.sha256).bind;
                        return [4 /*yield*/, this.getSigningKey(credentials, region, shortDate, signingService)];
                    case 5:
                        hash = new (_f.apply(_e, [void 0, _h.sent()]))();
                        hash.update(stringToSign);
                        _g = toHex;
                        return [4 /*yield*/, hash.digest()];
                    case 6: return [2 /*return*/, _g.apply(void 0, [_h.sent()])];
                }
            });
        });
    };
    SignatureV4.prototype.signRequest = function (requestToSign, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.signingDate, signingDate = _c === void 0 ? new Date() : _c, signableHeaders = _b.signableHeaders, unsignableHeaders = _b.unsignableHeaders, signingRegion = _b.signingRegion, signingService = _b.signingService;
        return index.__awaiter(this, void 0, void 0, function () {
            var credentials, region, _d, request, _e, longDate, shortDate, scope, payloadHash, canonicalHeaders, signature;
            return index.__generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.credentialProvider()];
                    case 1:
                        credentials = _f.sent();
                        if (!(signingRegion !== null && signingRegion !== void 0)) return [3 /*break*/, 2];
                        _d = signingRegion;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.regionProvider()];
                    case 3:
                        _d = (_f.sent());
                        _f.label = 4;
                    case 4:
                        region = _d;
                        request = prepareRequest(requestToSign);
                        _e = formatDate(signingDate), longDate = _e.longDate, shortDate = _e.shortDate;
                        scope = createScope(shortDate, region, signingService !== null && signingService !== void 0 ? signingService : this.service);
                        request.headers[AMZ_DATE_HEADER] = longDate;
                        if (credentials.sessionToken) {
                            request.headers[TOKEN_HEADER] = credentials.sessionToken;
                        }
                        return [4 /*yield*/, getPayloadHash(request, this.sha256)];
                    case 5:
                        payloadHash = _f.sent();
                        if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
                            request.headers[SHA256_HEADER] = payloadHash;
                        }
                        canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
                        return [4 /*yield*/, this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash))];
                    case 6:
                        signature = _f.sent();
                        request.headers[AUTH_HEADER] =
                            ALGORITHM_IDENTIFIER + " " +
                                ("Credential=" + credentials.accessKeyId + "/" + scope + ", ") +
                                ("SignedHeaders=" + getCanonicalHeaderList(canonicalHeaders) + ", ") +
                                ("Signature=" + signature);
                        return [2 /*return*/, request];
                }
            });
        });
    };
    SignatureV4.prototype.createCanonicalRequest = function (request, canonicalHeaders, payloadHash) {
        var sortedHeaders = Object.keys(canonicalHeaders).sort();
        return request.method + "\n" + this.getCanonicalPath(request) + "\n" + getCanonicalQuery(request) + "\n" + sortedHeaders.map(function (name) { return name + ":" + canonicalHeaders[name]; }).join("\n") + "\n\n" + sortedHeaders.join(";") + "\n" + payloadHash;
    };
    SignatureV4.prototype.createStringToSign = function (longDate, credentialScope, canonicalRequest) {
        return index.__awaiter(this, void 0, void 0, function () {
            var hash, hashedRequest;
            return index.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hash = new this.sha256();
                        hash.update(canonicalRequest);
                        return [4 /*yield*/, hash.digest()];
                    case 1:
                        hashedRequest = _a.sent();
                        return [2 /*return*/, ALGORITHM_IDENTIFIER + "\n" + longDate + "\n" + credentialScope + "\n" + toHex(hashedRequest)];
                }
            });
        });
    };
    SignatureV4.prototype.getCanonicalPath = function (_a) {
        var path = _a.path;
        if (this.uriEscapePath) {
            var doubleEncoded = encodeURIComponent(path.replace(/^\//, ""));
            return "/" + doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
    };
    SignatureV4.prototype.getSignature = function (longDate, credentialScope, keyPromise, canonicalRequest) {
        return index.__awaiter(this, void 0, void 0, function () {
            var stringToSign, hash, _a, _b, _c;
            return index.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.createStringToSign(longDate, credentialScope, canonicalRequest)];
                    case 1:
                        stringToSign = _d.sent();
                        _b = (_a = this.sha256).bind;
                        return [4 /*yield*/, keyPromise];
                    case 2:
                        hash = new (_b.apply(_a, [void 0, _d.sent()]))();
                        hash.update(stringToSign);
                        _c = toHex;
                        return [4 /*yield*/, hash.digest()];
                    case 3: return [2 /*return*/, _c.apply(void 0, [_d.sent()])];
                }
            });
        });
    };
    SignatureV4.prototype.getSigningKey = function (credentials, region, shortDate, service) {
        return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
    };
    return SignatureV4;
}());
var formatDate = function (now) {
    var longDate = iso8601(now).replace(/[\-:]/g, "");
    return {
        longDate: longDate,
        shortDate: longDate.substr(0, 8),
    };
};
var getCanonicalHeaderList = function (headers) { return Object.keys(headers).sort().join(";"); };

// 5 minutes buffer time the refresh the credential before it really expires
var CREDENTIAL_EXPIRE_WINDOW = 300000;
var resolveAwsAuthConfig = function (input) {
    var normalizedCreds = input.credentials
        ? normalizeCredentialProvider(input.credentials)
        : input.credentialDefaultProvider(input);
    var _a = input.signingEscapePath, signingEscapePath = _a === void 0 ? true : _a, _b = input.systemClockOffset, systemClockOffset = _b === void 0 ? input.systemClockOffset || 0 : _b, sha256 = input.sha256;
    var signer;
    if (input.signer) {
        //if signer is supplied by user, normalize it to a function returning a promise for signer.
        signer = normalizeProvider(input.signer);
    }
    else {
        //construct a provider inferring signing from region.
        signer = function () {
            return normalizeProvider(input.region)()
                .then(function (region) { return index.__awaiter(void 0, void 0, void 0, function () { return index.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, input.regionInfoProvider(region)];
                    case 1: return [2 /*return*/, [(_a.sent()) || {}, region]];
                }
            }); }); })
                .then(function (_a) {
                var _b = index.__read(_a, 2), regionInfo = _b[0], region = _b[1];
                var signingRegion = regionInfo.signingRegion, signingService = regionInfo.signingService;
                //update client's singing region and signing service config if they are resolved.
                //signing region resolving order: user supplied signingRegion -> endpoints.json inferred region -> client region
                input.signingRegion = input.signingRegion || signingRegion || region;
                //signing name resolving order:
                //user supplied signingName -> endpoints.json inferred (credential scope -> model arnNamespace) -> model service id
                input.signingName = input.signingName || signingService || input.serviceId;
                var params = index.__assign(index.__assign({}, input), { credentials: normalizedCreds, region: input.signingRegion, service: input.signingName, sha256: sha256, uriEscapePath: signingEscapePath });
                var signerConstructor = input.signerConstructor || SignatureV4;
                return new signerConstructor(params);
            });
        };
    }
    return index.__assign(index.__assign({}, input), { systemClockOffset: systemClockOffset, signingEscapePath: signingEscapePath, credentials: normalizedCreds, signer: signer });
};
var normalizeProvider = function (input) {
    if (typeof input === "object") {
        var promisified_1 = Promise.resolve(input);
        return function () { return promisified_1; };
    }
    return input;
};
var normalizeCredentialProvider = function (credentials) {
    if (typeof credentials === "function") {
        return memoize(credentials, function (credentials) {
            return credentials.expiration !== undefined &&
                credentials.expiration.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW;
        }, function (credentials) { return credentials.expiration !== undefined; });
    }
    return normalizeProvider(credentials);
};

/**
 * Returns a date that is corrected for clock skew.
 *
 * @param systemClockOffset The offset of the system clock in milliseconds.
 */
var getSkewCorrectedDate = function (systemClockOffset) { return new Date(Date.now() + systemClockOffset); };

/**
 * Checks if the provided date is within the skew window of 300000ms.
 *
 * @param clockTime - The time to check for skew in milliseconds.
 * @param systemClockOffset - The offset of the system clock in milliseconds.
 */
var isClockSkewed = function (clockTime, systemClockOffset) {
    return Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 300000;
};

/**
 * If clock is skewed, it returns the difference between serverTime and current time.
 * If clock is not skewed, it returns currentSystemClockOffset.
 *
 * @param clockTime The string value of the server time.
 * @param currentSystemClockOffset The current system clock offset.
 */
var getUpdatedSystemClockOffset = function (clockTime, currentSystemClockOffset) {
    var clockTimeInMs = Date.parse(clockTime);
    if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
    }
    return currentSystemClockOffset;
};

var awsAuthMiddleware = function (options) {
    return function (next, context) {
        return function (args) {
            return index.__awaiter(this, void 0, void 0, function () {
                var signer, output, _a, _b, headers, dateHeader;
                var _c;
                return index.__generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            if (!index.HttpRequest.isInstance(args.request))
                                return [2 /*return*/, next(args)];
                            return [4 /*yield*/, options.signer()];
                        case 1:
                            signer = _d.sent();
                            _a = next;
                            _b = [index.__assign({}, args)];
                            _c = {};
                            return [4 /*yield*/, signer.sign(args.request, {
                                    signingDate: getSkewCorrectedDate(options.systemClockOffset),
                                    signingRegion: context["signing_region"],
                                    signingService: context["signing_service"],
                                })];
                        case 2: return [4 /*yield*/, _a.apply(void 0, [index.__assign.apply(void 0, _b.concat([(_c.request = _d.sent(), _c)]))]).catch(function (error) {
                                if (error.ServerTime) {
                                    options.systemClockOffset = getUpdatedSystemClockOffset(error.ServerTime, options.systemClockOffset);
                                }
                                throw error;
                            })];
                        case 3:
                            output = _d.sent();
                            headers = output.response.headers;
                            dateHeader = headers && (headers.date || headers.Date);
                            if (dateHeader) {
                                options.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, options.systemClockOffset);
                            }
                            return [2 /*return*/, output];
                    }
                });
            });
        };
    };
};
var awsAuthMiddlewareOptions = {
    name: "awsAuthMiddleware",
    tags: ["SIGNATURE", "AWSAUTH"],
    relation: "after",
    toMiddleware: "retryMiddleware",
    override: true,
};
var getAwsAuthPlugin = function (options) { return ({
    applyToStack: function (clientStack) {
        clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
    },
}); };

/**
 * <p>Returns a set of temporary security credentials that you can use to access Amazon Web Services
 *             resources that you might not normally have access to. These temporary credentials
 *             consist of an access key ID, a secret access key, and a security token. Typically, you
 *             use <code>AssumeRole</code> within your account or for cross-account access. For a
 *             comparison of <code>AssumeRole</code> with other API operations that produce temporary
 *             credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security
 *                 Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing
 *                 the STS API operations</a> in the
 *             <i>IAM User Guide</i>.</p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>The temporary security credentials created by <code>AssumeRole</code> can be used to
 *          make API calls to any Amazon Web Services service with the following exception: You cannot call the
 *          STS <code>GetFederationToken</code> or <code>GetSessionToken</code> API
 *          operations.</p>
 *          <p>(Optional) You can pass inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policies</a> to
 *          this operation. You can pass a single JSON policy document to use as an inline session
 *          policy. You can also specify up to 10 managed policies to use as managed session policies.
 *          The plaintext that you use for both inline and managed session policies can't exceed 2,048
 *          characters. Passing policies to this operation returns new
 *          temporary credentials. The resulting session's permissions are the intersection of the
 *          role's identity-based policy and the session policies. You can use the role's temporary
 *          credentials in subsequent Amazon Web Services API calls to access resources in the account that owns
 *          the role. You cannot use session policies to grant more permissions than those allowed
 *          by the identity-based policy of the role that is being assumed. For more information, see
 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session
 *             Policies</a> in the <i>IAM User Guide</i>.</p>
 *          <p>To assume a role from a different account, your account must be trusted by the
 *          role. The trust relationship is defined in the role's trust policy when the role is
 *          created. That trust policy states which accounts are allowed to delegate that access to
 *          users in the account. </p>
 *          <p>A user who wants to access a role in a different account must also have permissions that
 *          are delegated from the user account administrator. The administrator must attach a policy
 *          that allows the user to call <code>AssumeRole</code> for the ARN of the role in the other
 *          account. If the user is in the same account as the role, then you can do either of the
 *          following:</p>
 *          <ul>
 *             <li>
 *                <p>Attach a policy to the user (identical to the previous user in a different
 *                account).</p>
 *             </li>
 *             <li>
 *                <p>Add the user as a principal directly in the role's trust policy.</p>
 *             </li>
 *          </ul>
 *          <p>In this case, the trust policy acts as an IAM resource-based policy. Users in the same
 *          account as the role do not need explicit permission to assume the role. For more
 *          information about trust policies and resource-based policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a> in
 *          the <i>IAM User Guide</i>.</p>
 *          <p>
 *             <b>Tags</b>
 *          </p>
 *          <p>(Optional) You can pass tag key-value pairs to your session. These tags are called
 *          session tags. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the
 *             <i>IAM User Guide</i>.</p>
 *          <p>An administrator must grant you the permissions necessary to pass session tags. The
 *          administrator can also create granular permissions to allow you to pass only specific
 *          session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags
 *             for Attribute-Based Access Control</a> in the
 *          <i>IAM User Guide</i>.</p>
 *          <p>You can set the session tags as transitive. Transitive tags persist during role
 *          chaining. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining">Chaining Roles
 *             with Session Tags</a> in the <i>IAM User Guide</i>.</p>
 *          <p>
 *             <b>Using MFA with AssumeRole</b>
 *          </p>
 *          <p>(Optional) You can include multi-factor authentication (MFA) information when you call
 *             <code>AssumeRole</code>. This is useful for cross-account scenarios to ensure that the
 *          user that assumes the role has been authenticated with an Amazon Web Services MFA device. In that
 *          scenario, the trust policy of the role being assumed includes a condition that tests for
 *          MFA authentication. If the caller does not include valid MFA information, the request to
 *          assume the role is denied. The condition in a trust policy that tests for MFA
 *          authentication might look like the following example.</p>
 *          <p>
 *             <code>"Condition": {"Bool": {"aws:MultiFactorAuthPresent": true}}</code>
 *          </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/MFAProtectedAPI.html">Configuring MFA-Protected API Access</a>
 *          in the <i>IAM User Guide</i> guide.</p>
 *          <p>To use MFA with <code>AssumeRole</code>, you pass values for the
 *             <code>SerialNumber</code> and <code>TokenCode</code> parameters. The
 *             <code>SerialNumber</code> value identifies the user's hardware or virtual MFA device.
 *          The <code>TokenCode</code> is the time-based one-time password (TOTP) that the MFA device
 *          produces. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, AssumeRoleCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, AssumeRoleCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * const client = new STSClient(config);
 * const command = new AssumeRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssumeRoleCommandInput} for command's `input` shape.
 * @see {@link AssumeRoleCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssumeRoleCommand = /** @class */ (function (_super) {
    index.__extends(AssumeRoleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssumeRoleCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    AssumeRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(index.getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "STSClient";
        var commandName = "AssumeRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssumeRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssumeRoleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssumeRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAssumeRoleCommand(input, context);
    };
    AssumeRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAssumeRoleCommand(output, context);
    };
    return AssumeRoleCommand;
}(index.Command));

/**
 * <p>Returns a set of temporary security credentials for users who have been authenticated in
 *          a mobile or web application with a web identity provider. Example providers include Amazon Cognito,
 *          Login with Amazon, Facebook, Google, or any OpenID Connect-compatible identity
 *          provider.</p>
 *          <note>
 *             <p>For mobile applications, we recommend that you use Amazon Cognito. You can use Amazon Cognito with the
 *                <a href="http://aws.amazon.com/sdkforios/">Amazon Web Services SDK for iOS Developer Guide</a> and the <a href="http://aws.amazon.com/sdkforandroid/">Amazon Web Services SDK for Android Developer Guide</a> to uniquely
 *             identify a user. You can also supply the user with a consistent identity throughout the
 *             lifetime of an application.</p>
 *             <p>To learn more about Amazon Cognito, see <a href="https://docs.aws.amazon.com/mobile/sdkforandroid/developerguide/cognito-auth.html#d0e840">Amazon Cognito Overview</a> in
 *                <i>Amazon Web Services SDK for Android Developer Guide</i> and <a href="https://docs.aws.amazon.com/mobile/sdkforios/developerguide/cognito-auth.html#d0e664">Amazon Cognito Overview</a> in the
 *                <i>Amazon Web Services SDK for iOS Developer Guide</i>.</p>
 *          </note>
 *          <p>Calling <code>AssumeRoleWithWebIdentity</code> does not require the use of Amazon Web Services
 *          security credentials. Therefore, you can distribute an application (for example, on mobile
 *          devices) that requests temporary security credentials without including long-term Amazon Web Services
 *          credentials in the application. You also don't need to deploy server-based proxy services
 *          that use long-term Amazon Web Services credentials. Instead, the identity of the caller is validated by
 *          using a token from the web identity provider. For a comparison of
 *             <code>AssumeRoleWithWebIdentity</code> with the other API operations that produce
 *          temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security
 *             Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the
 *             STS API operations</a> in the <i>IAM User Guide</i>.</p>
 *          <p>The temporary security credentials returned by this API consist of an access key ID, a
 *          secret access key, and a security token. Applications can use these temporary security
 *          credentials to sign calls to Amazon Web Services service API operations.</p>
 *          <p>
 *             <b>Session Duration</b>
 *          </p>
 *          <p>By default, the temporary security credentials created by
 *             <code>AssumeRoleWithWebIdentity</code> last for one hour. However, you can use the
 *          optional <code>DurationSeconds</code> parameter to specify the duration of your session.
 *          You can provide a value from 900 seconds (15 minutes) up to the maximum session duration
 *          setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how
 *          to view the maximum value for your role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session">View the
 *             Maximum Session Duration Setting for a Role</a> in the
 *             <i>IAM User Guide</i>. The maximum session duration limit applies when
 *          you use the <code>AssumeRole*</code> API operations or the <code>assume-role*</code> CLI
 *          commands. However the limit does not apply when you use those operations to create a
 *          console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> in the
 *             <i>IAM User Guide</i>. </p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>The temporary security credentials created by <code>AssumeRoleWithWebIdentity</code> can
 *          be used to make API calls to any Amazon Web Services service with the following exception: you cannot
 *          call the STS <code>GetFederationToken</code> or <code>GetSessionToken</code> API
 *          operations.</p>
 *          <p>(Optional) You can pass inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policies</a> to
 *          this operation. You can pass a single JSON policy document to use as an inline session
 *          policy. You can also specify up to 10 managed policies to use as managed session policies.
 *          The plaintext that you use for both inline and managed session policies can't exceed 2,048
 *          characters. Passing policies to this operation returns new
 *          temporary credentials. The resulting session's permissions are the intersection of the
 *          role's identity-based policy and the session policies. You can use the role's temporary
 *          credentials in subsequent Amazon Web Services API calls to access resources in the account that owns
 *          the role. You cannot use session policies to grant more permissions than those allowed
 *          by the identity-based policy of the role that is being assumed. For more information, see
 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session
 *             Policies</a> in the <i>IAM User Guide</i>.</p>
 *          <p>
 *             <b>Tags</b>
 *          </p>
 *          <p>(Optional) You can configure your IdP to pass attributes into your web identity token as
 *          session tags. Each session tag consists of a key name and an associated value. For more
 *          information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the
 *             <i>IAM User Guide</i>.</p>
 *          <p>You can pass up to 50 session tags. The plaintext session tag keys can’t exceed 128
 *          characters and the values can’t exceed 256 characters. For these and additional limits, see
 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html#reference_iam-limits-entity-length">IAM
 *             and STS Character Limits</a> in the <i>IAM User Guide</i>.</p>
 *
 *          <note>
 *             <p>An Amazon Web Services conversion compresses the passed session policies and session tags into a
 *             packed binary format that has a separate limit. Your request can fail for this limit
 *             even if your plaintext meets the other requirements. The <code>PackedPolicySize</code>
 *             response element indicates by percentage how close the policies and tags for your
 *             request are to the upper size limit.
 *             </p>
 *          </note>
 *          <p>You can pass a session tag with the same key as a tag that is
 *          attached to the role. When you do, the session tag overrides the role tag with the same
 *          key.</p>
 *          <p>An administrator must grant you the permissions necessary to pass session tags. The
 *          administrator can also create granular permissions to allow you to pass only specific
 *          session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags
 *             for Attribute-Based Access Control</a> in the
 *          <i>IAM User Guide</i>.</p>
 *          <p>You can set the session tags as transitive. Transitive tags persist during role
 *          chaining. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining">Chaining Roles
 *             with Session Tags</a> in the <i>IAM User Guide</i>.</p>
 *          <p>
 *             <b>Identities</b>
 *          </p>
 *          <p>Before your application can call <code>AssumeRoleWithWebIdentity</code>, you must have
 *          an identity token from a supported identity provider and create a role that the application
 *          can assume. The role that your application assumes must trust the identity provider that is
 *          associated with the identity token. In other words, the identity provider must be specified
 *          in the role's trust policy. </p>
 *          <important>
 *             <p>Calling <code>AssumeRoleWithWebIdentity</code> can result in an entry in your
 *             CloudTrail logs. The entry includes the <a href="http://openid.net/specs/openid-connect-core-1_0.html#Claims">Subject</a> of
 *             the provided web identity token. We recommend that you avoid using any personally
 *             identifiable information (PII) in this field. For example, you could instead use a GUID
 *             or a pairwise identifier, as <a href="http://openid.net/specs/openid-connect-core-1_0.html#SubjectIDTypes">suggested
 *                in the OIDC specification</a>.</p>
 *          </important>
 *          <p>For more information about how to use web identity federation and the
 *             <code>AssumeRoleWithWebIdentity</code> API, see the following resources: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc_manual.html">Using Web Identity Federation API Operations for Mobile Apps</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity">Federation Through a Web-based Identity Provider</a>. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://aws.amazon.com/blogs/aws/the-aws-web-identity-federation-playground/"> Web Identity Federation Playground</a>. Walk through the process of
 *                authenticating through Login with Amazon, Facebook, or Google, getting temporary
 *                security credentials, and then using those credentials to make a request to Amazon Web Services.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/sdkforios/">Amazon Web Services SDK for iOS Developer Guide</a> and <a href="http://aws.amazon.com/sdkforandroid/">Amazon Web Services SDK for Android Developer Guide</a>. These toolkits
 *                contain sample apps that show how to invoke the identity providers. The toolkits then
 *                show how to use the information from these providers to get and use temporary
 *                security credentials. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/articles/web-identity-federation-with-mobile-applications">Web Identity
 *                   Federation with Mobile Applications</a>. This article discusses web identity
 *                federation and shows an example of how to use web identity federation to get access
 *                to content in Amazon S3. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, AssumeRoleWithWebIdentityCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, AssumeRoleWithWebIdentityCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * const client = new STSClient(config);
 * const command = new AssumeRoleWithWebIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssumeRoleWithWebIdentityCommandInput} for command's `input` shape.
 * @see {@link AssumeRoleWithWebIdentityCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssumeRoleWithWebIdentityCommand = /** @class */ (function (_super) {
    index.__extends(AssumeRoleWithWebIdentityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssumeRoleWithWebIdentityCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    AssumeRoleWithWebIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(index.getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "STSClient";
        var commandName = "AssumeRoleWithWebIdentityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssumeRoleWithWebIdentityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssumeRoleWithWebIdentityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssumeRoleWithWebIdentityCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAssumeRoleWithWebIdentityCommand(input, context);
    };
    AssumeRoleWithWebIdentityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAssumeRoleWithWebIdentityCommand(output, context);
    };
    return AssumeRoleWithWebIdentityCommand;
}(index.Command));

var ASSUME_ROLE_DEFAULT_REGION = "us-east-1";
/**
 * Inject the fallback STS region of us-east-1.
 */
var decorateDefaultRegion = function (region) {
    if (typeof region !== "function") {
        return region === undefined ? ASSUME_ROLE_DEFAULT_REGION : region;
    }
    return function () { return index.__awaiter(void 0, void 0, void 0, function () {
        return index.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, region()];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    _a.sent();
                    return [2 /*return*/, ASSUME_ROLE_DEFAULT_REGION];
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
/**
 * The default role assumer that used by credential providers when sts:AssumeRole API is needed.
 * @internal
 */
var getDefaultRoleAssumer$1 = function (stsOptions, stsClientCtor) {
    var stsClient;
    var closureSourceCreds;
    return function (sourceCreds, params) { return index.__awaiter(void 0, void 0, void 0, function () {
        var logger, region, requestHandler, Credentials;
        return index.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    closureSourceCreds = sourceCreds;
                    if (!stsClient) {
                        logger = stsOptions.logger, region = stsOptions.region, requestHandler = stsOptions.requestHandler;
                        stsClient = new stsClientCtor(index.__assign({ logger: logger, 
                            // A hack to make sts client uses the credential in current closure.
                            credentialDefaultProvider: function () { return function () { return index.__awaiter(void 0, void 0, void 0, function () { return index.__generator(this, function (_a) {
                                return [2 /*return*/, closureSourceCreds];
                            }); }); }; }, region: decorateDefaultRegion(region || stsOptions.region) }, (requestHandler ? { requestHandler: requestHandler } : {})));
                    }
                    return [4 /*yield*/, stsClient.send(new AssumeRoleCommand(params))];
                case 1:
                    Credentials = (_a.sent()).Credentials;
                    if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
                        throw new Error("Invalid response from STS.assumeRole call with role " + params.RoleArn);
                    }
                    return [2 /*return*/, {
                            accessKeyId: Credentials.AccessKeyId,
                            secretAccessKey: Credentials.SecretAccessKey,
                            sessionToken: Credentials.SessionToken,
                            expiration: Credentials.Expiration,
                        }];
            }
        });
    }); };
};
/**
 * The default role assumer that used by credential providers when sts:AssumeRoleWithWebIdentity API is needed.
 * @internal
 */
var getDefaultRoleAssumerWithWebIdentity$1 = function (stsOptions, stsClientCtor) {
    var stsClient;
    return function (params) { return index.__awaiter(void 0, void 0, void 0, function () {
        var logger, region, requestHandler, Credentials;
        return index.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!stsClient) {
                        logger = stsOptions.logger, region = stsOptions.region, requestHandler = stsOptions.requestHandler;
                        stsClient = new stsClientCtor(index.__assign({ logger: logger, region: decorateDefaultRegion(region || stsOptions.region) }, (requestHandler ? { requestHandler: requestHandler } : {})));
                    }
                    return [4 /*yield*/, stsClient.send(new AssumeRoleWithWebIdentityCommand(params))];
                case 1:
                    Credentials = (_a.sent()).Credentials;
                    if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
                        throw new Error("Invalid response from STS.assumeRoleWithWebIdentity call with role " + params.RoleArn);
                    }
                    return [2 /*return*/, {
                            accessKeyId: Credentials.AccessKeyId,
                            secretAccessKey: Credentials.SecretAccessKey,
                            sessionToken: Credentials.SessionToken,
                            expiration: Credentials.Expiration,
                        }];
            }
        });
    }); };
};
/**
 * The default credential providers depend STS client to assume role with desired API: sts:assumeRole,
 * sts:assumeRoleWithWebIdentity, etc. This function decorates the default credential provider with role assumers which
 * encapsulates the process of calling STS commands. This can only be imported by AWS client packages to avoid circular
 * dependencies.
 *
 * @internal
 */
var decorateDefaultCredentialProvider$1 = function (provider) {
    return function (input) {
        return provider(index.__assign({ roleAssumer: getDefaultRoleAssumer$1(input, input.stsClientCtor), roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity$1(input, input.stsClientCtor) }, input));
    };
};

var normalizeEndpoint = function (_a) {
    var endpoint = _a.endpoint, urlParser = _a.urlParser;
    if (typeof endpoint === "string") {
        var promisified_1 = Promise.resolve(urlParser(endpoint));
        return function () { return promisified_1; };
    }
    else if (typeof endpoint === "object") {
        var promisified_2 = Promise.resolve(endpoint);
        return function () { return promisified_2; };
    }
    return endpoint;
};

var getEndpointFromRegion = function (input) { return index.__awaiter(void 0, void 0, void 0, function () {
    var _a, tls, region, dnsHostRegex, hostname;
    var _b;
    return index.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = input.tls, tls = _a === void 0 ? true : _a;
                return [4 /*yield*/, input.region()];
            case 1:
                region = _c.sent();
                dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
                if (!dnsHostRegex.test(region)) {
                    throw new Error("Invalid region in client config");
                }
                return [4 /*yield*/, input.regionInfoProvider(region)];
            case 2:
                hostname = ((_b = (_c.sent())) !== null && _b !== void 0 ? _b : {}).hostname;
                if (!hostname) {
                    throw new Error("Cannot resolve hostname from client config");
                }
                return [2 /*return*/, input.urlParser((tls ? "https:" : "http:") + "//" + hostname)];
        }
    });
}); };

var resolveEndpointsConfig = function (input) {
    var _a;
    return (index.__assign(index.__assign({}, input), { tls: (_a = input.tls) !== null && _a !== void 0 ? _a : true, endpoint: input.endpoint
            ? normalizeEndpoint(index.__assign(index.__assign({}, input), { endpoint: input.endpoint }))
            : function () { return getEndpointFromRegion(input); }, isCustomEndpoint: input.endpoint ? true : false }));
};

var REGION_ENV_NAME = "AWS_REGION";
var REGION_INI_NAME = "region";
var NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: function (env) { return env[REGION_ENV_NAME]; },
    configFileSelector: function (profile) { return profile[REGION_INI_NAME]; },
    default: function () {
        throw new Error("Region is missing");
    },
};
var NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials",
};

var normalizeRegion = function (region) {
    if (typeof region === "string") {
        var promisified_1 = Promise.resolve(region);
        return function () { return promisified_1; };
    }
    return region;
};

var resolveRegionConfig = function (input) {
    if (!input.region) {
        throw new Error("Region is missing");
    }
    return index.__assign(index.__assign({}, input), { region: normalizeRegion(input.region) });
};

var getResolvedPartition = function (region, _a) {
    var _b;
    var partitionHash = _a.partitionHash;
    return (_b = Object.keys(partitionHash || {}).find(function (key) { return partitionHash[key].regions.includes(region); })) !== null && _b !== void 0 ? _b : "aws";
};

var AWS_TEMPLATE = "{signingService}.{region}.amazonaws.com";
var getHostnameTemplate = function (region, _a) {
    var _b, _c;
    var signingService = _a.signingService, partitionHash = _a.partitionHash;
    return (_c = (_b = partitionHash[getResolvedPartition(region, { partitionHash: partitionHash })]) === null || _b === void 0 ? void 0 : _b.hostname) !== null && _c !== void 0 ? _c : AWS_TEMPLATE.replace("{signingService}", signingService);
};

var getResolvedHostname = function (region, _a) {
    var _b, _c;
    var signingService = _a.signingService, regionHash = _a.regionHash, partitionHash = _a.partitionHash;
    return (_c = (_b = regionHash[region]) === null || _b === void 0 ? void 0 : _b.hostname) !== null && _c !== void 0 ? _c : getHostnameTemplate(region, { signingService: signingService, partitionHash: partitionHash }).replace("{region}", region);
};

var getRegionInfo = function (region, _a) {
    var _b, _c, _d, _e;
    var signingService = _a.signingService, regionHash = _a.regionHash, partitionHash = _a.partitionHash;
    var partition = getResolvedPartition(region, { partitionHash: partitionHash });
    var resolvedRegion = (_c = (_b = partitionHash[partition]) === null || _b === void 0 ? void 0 : _b.endpoint) !== null && _c !== void 0 ? _c : region;
    return index.__assign(index.__assign({ partition: partition, signingService: signingService, hostname: getResolvedHostname(resolvedRegion, { signingService: signingService, regionHash: regionHash, partitionHash: partitionHash }) }, (((_d = regionHash[resolvedRegion]) === null || _d === void 0 ? void 0 : _d.signingRegion) && {
        signingRegion: regionHash[resolvedRegion].signingRegion,
    })), (((_e = regionHash[resolvedRegion]) === null || _e === void 0 ? void 0 : _e.signingService) && {
        signingService: regionHash[resolvedRegion].signingService,
    }));
};

var ENV_KEY = "AWS_ACCESS_KEY_ID";
var ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
var ENV_SESSION = "AWS_SESSION_TOKEN";
var ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
/**
 * Source AWS credentials from known environment variables. If either the
 * `AWS_ACCESS_KEY_ID` or `AWS_SECRET_ACCESS_KEY` environment variable is not
 * set in this process, the provider will return a rejected promise.
 */
function fromEnv$1() {
    return function () {
        var accessKeyId = process.env[ENV_KEY];
        var secretAccessKey = process.env[ENV_SECRET];
        var expiry = process.env[ENV_EXPIRATION];
        if (accessKeyId && secretAccessKey) {
            return Promise.resolve({
                accessKeyId: accessKeyId,
                secretAccessKey: secretAccessKey,
                sessionToken: process.env[ENV_SESSION],
                expiration: expiry ? new Date(expiry) : undefined,
            });
        }
        return Promise.reject(new CredentialsProviderError("Unable to find environment variable credentials."));
    };
}

/**
 * @internal
 */
function httpRequest(options) {
    return new Promise(function (resolve, reject) {
        var _a;
        var req = http.request(index.__assign(index.__assign({ method: "GET" }, options), { 
            // Node.js http module doesn't accept hostname with square brackets
            // Refs: https://github.com/nodejs/node/issues/39738
            hostname: (_a = options.hostname) === null || _a === void 0 ? void 0 : _a.replace(/^\[(.+)\]$/, "$1") }));
        req.on("error", function (err) {
            reject(Object.assign(new ProviderError("Unable to connect to instance metadata service"), err));
            req.destroy();
        });
        req.on("timeout", function () {
            reject(new ProviderError("TimeoutError from instance metadata service"));
            req.destroy();
        });
        req.on("response", function (res) {
            var _a = res.statusCode, statusCode = _a === void 0 ? 400 : _a;
            if (statusCode < 200 || 300 <= statusCode) {
                reject(Object.assign(new ProviderError("Error response received from instance metadata service"), { statusCode: statusCode }));
                req.destroy();
            }
            var chunks = [];
            res.on("data", function (chunk) {
                chunks.push(chunk);
            });
            res.on("end", function () {
                resolve(buffer.Buffer.concat(chunks));
                req.destroy();
            });
        });
        req.end();
    });
}

var isImdsCredentials = function (arg) {
    return Boolean(arg) &&
        typeof arg === "object" &&
        typeof arg.AccessKeyId === "string" &&
        typeof arg.SecretAccessKey === "string" &&
        typeof arg.Token === "string" &&
        typeof arg.Expiration === "string";
};
var fromImdsCredentials = function (creds) { return ({
    accessKeyId: creds.AccessKeyId,
    secretAccessKey: creds.SecretAccessKey,
    sessionToken: creds.Token,
    expiration: new Date(creds.Expiration),
}); };

var DEFAULT_TIMEOUT = 1000;
// The default in AWS SDK for Python and CLI (botocore) is no retry or one attempt
// https://github.com/boto/botocore/blob/646c61a7065933e75bab545b785e6098bc94c081/botocore/utils.py#L273
var DEFAULT_MAX_RETRIES = 0;
var providerConfigFromInit = function (_a) {
    var _b = _a.maxRetries, maxRetries = _b === void 0 ? DEFAULT_MAX_RETRIES : _b, _c = _a.timeout, timeout = _c === void 0 ? DEFAULT_TIMEOUT : _c;
    return ({ maxRetries: maxRetries, timeout: timeout });
};

/**
 * @internal
 */
var retry = function (toRetry, maxRetries) {
    var promise = toRetry();
    for (var i = 0; i < maxRetries; i++) {
        promise = promise.catch(toRetry);
    }
    return promise;
};

var ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
var ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
var ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
/**
 * Creates a credential provider that will source credentials from the ECS
 * Container Metadata Service
 */
var fromContainerMetadata = function (init) {
    if (init === void 0) { init = {}; }
    var _a = providerConfigFromInit(init), timeout = _a.timeout, maxRetries = _a.maxRetries;
    return function () {
        return retry(function () { return index.__awaiter(void 0, void 0, void 0, function () {
            var requestOptions, credsResponse, _a, _b;
            return index.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, getCmdsUri()];
                    case 1:
                        requestOptions = _c.sent();
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, requestFromEcsImds(timeout, requestOptions)];
                    case 2:
                        credsResponse = _b.apply(_a, [_c.sent()]);
                        if (!isImdsCredentials(credsResponse)) {
                            throw new CredentialsProviderError("Invalid response received from instance metadata service.");
                        }
                        return [2 /*return*/, fromImdsCredentials(credsResponse)];
                }
            });
        }); }, maxRetries);
    };
};
var requestFromEcsImds = function (timeout, options) { return index.__awaiter(void 0, void 0, void 0, function () {
    var buffer;
    return index.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (process.env[ENV_CMDS_AUTH_TOKEN]) {
                    options.headers = index.__assign(index.__assign({}, options.headers), { Authorization: process.env[ENV_CMDS_AUTH_TOKEN] });
                }
                return [4 /*yield*/, httpRequest(index.__assign(index.__assign({}, options), { timeout: timeout }))];
            case 1:
                buffer = _a.sent();
                return [2 /*return*/, buffer.toString()];
        }
    });
}); };
var CMDS_IP = "169.254.170.2";
var GREENGRASS_HOSTS = {
    localhost: true,
    "127.0.0.1": true,
};
var GREENGRASS_PROTOCOLS = {
    "http:": true,
    "https:": true,
};
var getCmdsUri = function () { return index.__awaiter(void 0, void 0, void 0, function () {
    var parsed;
    return index.__generator(this, function (_a) {
        if (process.env[ENV_CMDS_RELATIVE_URI]) {
            return [2 /*return*/, {
                    hostname: CMDS_IP,
                    path: process.env[ENV_CMDS_RELATIVE_URI],
                }];
        }
        if (process.env[ENV_CMDS_FULL_URI]) {
            parsed = Url.parse(process.env[ENV_CMDS_FULL_URI]);
            if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
                throw new CredentialsProviderError(parsed.hostname + " is not a valid container metadata service hostname", false);
            }
            if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
                throw new CredentialsProviderError(parsed.protocol + " is not a valid container metadata service protocol", false);
            }
            return [2 /*return*/, index.__assign(index.__assign({}, parsed), { port: parsed.port ? parseInt(parsed.port, 10) : undefined })];
        }
        throw new CredentialsProviderError("The container metadata credential provider cannot be used unless" +
            (" the " + ENV_CMDS_RELATIVE_URI + " or " + ENV_CMDS_FULL_URI + " environment") +
            " variable is set", false);
    });
}); };

/**
 * Get config value given the environment variable name or getter from
 * environment variable.
 */
var fromEnv = function (envVarSelector) {
    return function () { return index.__awaiter(void 0, void 0, void 0, function () {
        var config;
        return index.__generator(this, function (_a) {
            try {
                config = envVarSelector(process.env);
                if (config === undefined) {
                    throw new Error();
                }
                return [2 /*return*/, config];
            }
            catch (e) {
                throw new CredentialsProviderError(e.message || "Cannot load config from environment variables with getter: " + envVarSelector);
            }
            return [2 /*return*/];
        });
    }); };
};

var ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
var ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
var swallowError = function () { return ({}); };
var loadSharedConfigFiles = function (init) {
    if (init === void 0) { init = {}; }
    var _a = init.filepath, filepath = _a === void 0 ? process.env[ENV_CREDENTIALS_PATH] || require$$1.join(getHomeDir(), ".aws", "credentials") : _a, _b = init.configFilepath, configFilepath = _b === void 0 ? process.env[ENV_CONFIG_PATH] || require$$1.join(getHomeDir(), ".aws", "config") : _b;
    return Promise.all([
        slurpFile(configFilepath).then(parseIni).then(normalizeConfigFile).catch(swallowError),
        slurpFile(filepath).then(parseIni).catch(swallowError),
    ]).then(function (parsedFiles) {
        var _a = index.__read(parsedFiles, 2), configFile = _a[0], credentialsFile = _a[1];
        return {
            configFile: configFile,
            credentialsFile: credentialsFile,
        };
    });
};
var profileKeyRegex = /^profile\s(["'])?([^\1]+)\1$/;
var normalizeConfigFile = function (data) {
    var e_1, _a;
    var map = {};
    try {
        for (var _b = index.__values(Object.keys(data)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var matches = void 0;
            if (key === "default") {
                map.default = data.default;
            }
            else if ((matches = profileKeyRegex.exec(key))) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                var _d = index.__read(matches, 3), _1 = _d[0], _2 = _d[1], normalizedKey = _d[2];
                if (normalizedKey) {
                    map[normalizedKey] = data[key];
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return map;
};
var profileNameBlockList = ["__proto__", "profile __proto__"];
var parseIni = function (iniData) {
    var e_2, _a;
    var map = {};
    var currentSection;
    try {
        for (var _b = index.__values(iniData.split(/\r?\n/)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var line = _c.value;
            line = line.split(/(^|\s)[;#]/)[0]; // remove comments
            var section = line.match(/^\s*\[([^\[\]]+)]\s*$/);
            if (section) {
                currentSection = section[1];
                if (profileNameBlockList.includes(currentSection)) {
                    throw new Error("Found invalid profile name \"" + currentSection + "\"");
                }
            }
            else if (currentSection) {
                var item = line.match(/^\s*(.+?)\s*=\s*(.+?)\s*$/);
                if (item) {
                    map[currentSection] = map[currentSection] || {};
                    map[currentSection][item[1]] = item[2];
                }
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return map;
};
var slurpFile = function (path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, "utf8", function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};
/**
 * Get the HOME directory for the current runtime.
 *
 * @internal
 */
var getHomeDir = function () {
    var _a = process.env, HOME = _a.HOME, USERPROFILE = _a.USERPROFILE, HOMEPATH = _a.HOMEPATH, _b = _a.HOMEDRIVE, HOMEDRIVE = _b === void 0 ? "C:" + require$$1.sep : _b;
    if (HOME)
        return HOME;
    if (USERPROFILE)
        return USERPROFILE;
    if (HOMEPATH)
        return "" + HOMEDRIVE + HOMEPATH;
    return os.homedir();
};

var DEFAULT_PROFILE$1 = "default";
var ENV_PROFILE$1 = "AWS_PROFILE";
/**
 * Get config value from the shared config files with inferred profile name.
 */
var fromSharedConfigFiles = function (configSelector, _a) {
    if (_a === void 0) { _a = {}; }
    var _b = _a.preferredFile, preferredFile = _b === void 0 ? "config" : _b, init = index.__rest(_a, ["preferredFile"]);
    return function () { return index.__awaiter(void 0, void 0, void 0, function () {
        var _a, loadedConfig, _b, profile, _c, configFile, credentialsFile, profileFromCredentials, profileFromConfig, mergedProfile, configValue;
        return index.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = init.loadedConfig, loadedConfig = _a === void 0 ? loadSharedConfigFiles(init) : _a, _b = init.profile, profile = _b === void 0 ? process.env[ENV_PROFILE$1] || DEFAULT_PROFILE$1 : _b;
                    return [4 /*yield*/, loadedConfig];
                case 1:
                    _c = _d.sent(), configFile = _c.configFile, credentialsFile = _c.credentialsFile;
                    profileFromCredentials = credentialsFile[profile] || {};
                    profileFromConfig = configFile[profile] || {};
                    mergedProfile = preferredFile === "config"
                        ? index.__assign(index.__assign({}, profileFromCredentials), profileFromConfig) : index.__assign(index.__assign({}, profileFromConfig), profileFromCredentials);
                    try {
                        configValue = configSelector(mergedProfile);
                        if (configValue === undefined) {
                            throw new Error();
                        }
                        return [2 /*return*/, configValue];
                    }
                    catch (e) {
                        throw new CredentialsProviderError(e.message ||
                            "Cannot load config for profile " + profile + " in SDK configuration files with getter: " + configSelector);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
};

var isFunction = function (func) { return typeof func === "function"; };
var fromStatic = function (defaultValue) {
    return isFunction(defaultValue) ? function () { return index.__awaiter(void 0, void 0, void 0, function () { return index.__generator(this, function (_a) {
        return [2 /*return*/, defaultValue()];
    }); }); } : fromStatic$1(defaultValue);
};

var loadConfig = function (_a, configuration) {
    var environmentVariableSelector = _a.environmentVariableSelector, configFileSelector = _a.configFileSelector, defaultValue = _a.default;
    if (configuration === void 0) { configuration = {}; }
    return memoize(chain(fromEnv(environmentVariableSelector), fromSharedConfigFiles(configFileSelector, configuration), fromStatic(defaultValue)));
};

function parseQueryString(querystring) {
    var e_1, _a;
    var query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
        try {
            for (var _b = index.__values(querystring.split("&")), _c = _b.next(); !_c.done; _c = _b.next()) {
                var pair = _c.value;
                var _d = index.__read(pair.split("="), 2), key = _d[0], _e = _d[1], value = _e === void 0 ? null : _e;
                key = decodeURIComponent(key);
                if (value) {
                    value = decodeURIComponent(value);
                }
                if (!(key in query)) {
                    query[key] = value;
                }
                else if (Array.isArray(query[key])) {
                    query[key].push(value);
                }
                else {
                    query[key] = [query[key], value];
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return query;
}

var parseUrl = function (url) {
    var _a = new URL(url), hostname = _a.hostname, pathname = _a.pathname, port = _a.port, protocol = _a.protocol, search = _a.search;
    var query;
    if (search) {
        query = parseQueryString(search);
    }
    return {
        hostname: hostname,
        port: port ? parseInt(port) : undefined,
        protocol: protocol,
        path: pathname,
        query: query,
    };
};

var Endpoint;
(function (Endpoint) {
    Endpoint["IPv4"] = "http://169.254.169.254";
    Endpoint["IPv6"] = "http://[fd00:ec2::254]";
})(Endpoint || (Endpoint = {}));

var ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
var CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
var ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: function (env) { return env[ENV_ENDPOINT_NAME]; },
    configFileSelector: function (profile) { return profile[CONFIG_ENDPOINT_NAME]; },
    default: undefined,
};

var EndpointMode;
(function (EndpointMode) {
    EndpointMode["IPv4"] = "IPv4";
    EndpointMode["IPv6"] = "IPv6";
})(EndpointMode || (EndpointMode = {}));

var ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
var CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
var ENDPOINT_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: function (env) { return env[ENV_ENDPOINT_MODE_NAME]; },
    configFileSelector: function (profile) { return profile[CONFIG_ENDPOINT_MODE_NAME]; },
    default: EndpointMode.IPv4,
};

/**
 * Returns the host to use for instance metadata service call.
 *
 * The host is read from endpoint which can be set either in
 * {@link ENV_ENDPOINT_NAME} environment variable or {@link CONFIG_ENDPOINT_NAME}
 * configuration property.
 *
 * If endpoint is not set, then endpoint mode is read either from
 * {@link ENV_ENDPOINT_MODE_NAME} environment variable or {@link CONFIG_ENDPOINT_MODE_NAME}
 * configuration property. If endpoint mode is not set, then default endpoint mode
 * {@link EndpointMode.IPv4} is used.
 *
 * If endpoint mode is set to {@link EndpointMode.IPv4}, then the host is {@link Endpoint.IPv4}.
 * If endpoint mode is set to {@link EndpointMode.IPv6}, then the host is {@link Endpoint.IPv6}.
 *
 * @returns Host to use for instance metadata service call.
 */
var getInstanceMetadataEndpoint = function () { return index.__awaiter(void 0, void 0, void 0, function () { var _a, _b; return index.__generator(this, function (_c) {
    switch (_c.label) {
        case 0:
            _a = parseUrl;
            return [4 /*yield*/, getFromEndpointConfig()];
        case 1:
            _b = (_c.sent());
            if (_b) return [3 /*break*/, 3];
            return [4 /*yield*/, getFromEndpointModeConfig()];
        case 2:
            _b = (_c.sent());
            _c.label = 3;
        case 3: return [2 /*return*/, _a.apply(void 0, [_b])];
    }
}); }); };
var getFromEndpointConfig = function () { return index.__awaiter(void 0, void 0, void 0, function () { return index.__generator(this, function (_a) {
    return [2 /*return*/, loadConfig(ENDPOINT_CONFIG_OPTIONS)()];
}); }); };
var getFromEndpointModeConfig = function () { return index.__awaiter(void 0, void 0, void 0, function () {
    var endpointMode;
    return index.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, loadConfig(ENDPOINT_MODE_CONFIG_OPTIONS)()];
            case 1:
                endpointMode = _a.sent();
                switch (endpointMode) {
                    case EndpointMode.IPv4:
                        return [2 /*return*/, Endpoint.IPv4];
                    case EndpointMode.IPv6:
                        return [2 /*return*/, Endpoint.IPv6];
                    default:
                        throw new Error("Unsupported endpoint mode: " + endpointMode + "." + (" Select from " + Object.values(EndpointMode)));
                }
        }
    });
}); };

var IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
var IMDS_TOKEN_PATH = "/latest/api/token";
/**
 * Creates a credential provider that will source credentials from the EC2
 * Instance Metadata Service
 */
var fromInstanceMetadata = function (init) {
    if (init === void 0) { init = {}; }
    // when set to true, metadata service will not fetch token
    var disableFetchToken = false;
    var _a = providerConfigFromInit(init), timeout = _a.timeout, maxRetries = _a.maxRetries;
    var getCredentials = function (maxRetries, options) { return index.__awaiter(void 0, void 0, void 0, function () {
        var profile;
        return index.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, retry(function () { return index.__awaiter(void 0, void 0, void 0, function () {
                        var profile, err_1;
                        return index.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, getProfile(options)];
                                case 1:
                                    profile = _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    err_1 = _a.sent();
                                    if (err_1.statusCode === 401) {
                                        disableFetchToken = false;
                                    }
                                    throw err_1;
                                case 3: return [2 /*return*/, profile];
                            }
                        });
                    }); }, maxRetries)];
                case 1:
                    profile = (_a.sent()).trim();
                    return [2 /*return*/, retry(function () { return index.__awaiter(void 0, void 0, void 0, function () {
                            var creds, err_2;
                            return index.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, getCredentialsFromProfile(profile, options)];
                                    case 1:
                                        creds = _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        err_2 = _a.sent();
                                        if (err_2.statusCode === 401) {
                                            disableFetchToken = false;
                                        }
                                        throw err_2;
                                    case 3: return [2 /*return*/, creds];
                                }
                            });
                        }); }, maxRetries)];
            }
        });
    }); };
    return function () { return index.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, token, error_1;
        return index.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getInstanceMetadataEndpoint()];
                case 1:
                    endpoint = _a.sent();
                    if (!disableFetchToken) return [3 /*break*/, 2];
                    return [2 /*return*/, getCredentials(maxRetries, index.__assign(index.__assign({}, endpoint), { timeout: timeout }))];
                case 2:
                    token = void 0;
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, getMetadataToken(index.__assign(index.__assign({}, endpoint), { timeout: timeout }))];
                case 4:
                    token = (_a.sent()).toString();
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    if ((error_1 === null || error_1 === void 0 ? void 0 : error_1.statusCode) === 400) {
                        throw Object.assign(error_1, {
                            message: "EC2 Metadata token request returned error",
                        });
                    }
                    else if (error_1.message === "TimeoutError" || [403, 404, 405].includes(error_1.statusCode)) {
                        disableFetchToken = true;
                    }
                    return [2 /*return*/, getCredentials(maxRetries, index.__assign(index.__assign({}, endpoint), { timeout: timeout }))];
                case 6: return [2 /*return*/, getCredentials(maxRetries, index.__assign(index.__assign({}, endpoint), { headers: {
                            "x-aws-ec2-metadata-token": token,
                        }, timeout: timeout }))];
            }
        });
    }); };
};
var getMetadataToken = function (options) { return index.__awaiter(void 0, void 0, void 0, function () {
    return index.__generator(this, function (_a) {
        return [2 /*return*/, httpRequest(index.__assign(index.__assign({}, options), { path: IMDS_TOKEN_PATH, method: "PUT", headers: {
                    "x-aws-ec2-metadata-token-ttl-seconds": "21600",
                } }))];
    });
}); };
var getProfile = function (options) { return index.__awaiter(void 0, void 0, void 0, function () { return index.__generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, httpRequest(index.__assign(index.__assign({}, options), { path: IMDS_PATH }))];
        case 1: return [2 /*return*/, (_a.sent()).toString()];
    }
}); }); };
var getCredentialsFromProfile = function (profile, options) { return index.__awaiter(void 0, void 0, void 0, function () {
    var credsResponse, _a, _b;
    return index.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _b = (_a = JSON).parse;
                return [4 /*yield*/, httpRequest(index.__assign(index.__assign({}, options), { path: IMDS_PATH + profile }))];
            case 1:
                credsResponse = _b.apply(_a, [(_c.sent()).toString()]);
                if (!isImdsCredentials(credsResponse)) {
                    throw new CredentialsProviderError("Invalid response received from instance metadata service.");
                }
                return [2 /*return*/, fromImdsCredentials(credsResponse)];
        }
    });
}); };

var name = "@aws-sdk/client-sso";
var description = "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native";
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
	"@aws-sdk/config-resolver": "3.33.0",
	"@aws-sdk/fetch-http-handler": "3.32.0",
	"@aws-sdk/hash-node": "3.32.0",
	"@aws-sdk/invalid-dependency": "3.32.0",
	"@aws-sdk/middleware-content-length": "3.32.0",
	"@aws-sdk/middleware-host-header": "3.32.0",
	"@aws-sdk/middleware-logger": "3.32.0",
	"@aws-sdk/middleware-retry": "3.32.0",
	"@aws-sdk/middleware-serde": "3.32.0",
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
var homepage = "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso";
var repository = {
	type: "git",
	url: "https://github.com/aws/aws-sdk-js-v3.git",
	directory: "clients/client-sso"
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

var fromArrayBuffer = function (input, offset, length) {
    if (offset === void 0) { offset = 0; }
    if (length === void 0) { length = input.byteLength - offset; }
    if (!isArrayBuffer(input)) {
        throw new TypeError("The \"input\" argument must be ArrayBuffer. Received type " + typeof input + " (" + input + ")");
    }
    return buffer.Buffer.from(input, offset, length);
};
var fromString = function (input, encoding) {
    if (typeof input !== "string") {
        throw new TypeError("The \"input\" argument must be of type string. Received type " + typeof input + " (" + input + ")");
    }
    return encoding ? buffer.Buffer.from(input, encoding) : buffer.Buffer.from(input);
};

var Hash = /** @class */ (function () {
    function Hash(algorithmIdentifier, secret) {
        this.hash = secret ? crypto.createHmac(algorithmIdentifier, castSourceData(secret)) : crypto.createHash(algorithmIdentifier);
    }
    Hash.prototype.update = function (toHash, encoding) {
        this.hash.update(castSourceData(toHash, encoding));
    };
    Hash.prototype.digest = function () {
        return Promise.resolve(this.hash.digest());
    };
    return Hash;
}());
function castSourceData(toCast, encoding) {
    if (buffer.Buffer.isBuffer(toCast)) {
        return toCast;
    }
    if (typeof toCast === "string") {
        return fromString(toCast, encoding);
    }
    if (ArrayBuffer.isView(toCast)) {
        return fromArrayBuffer(toCast.buffer, toCast.byteOffset, toCast.byteLength);
    }
    return fromArrayBuffer(toCast);
}

var retryMiddleware = function (options) {
    return function (next, context) {
        return function (args) { return index.__awaiter(void 0, void 0, void 0, function () {
            var retryStrategy;
            return index.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, options.retryStrategy()];
                    case 1:
                        retryStrategy = _a.sent();
                        if (retryStrategy === null || retryStrategy === void 0 ? void 0 : retryStrategy.mode)
                            context.userAgent = index.__spreadArray(index.__spreadArray([], index.__read((context.userAgent || []))), [["cfg/retry-mode", retryStrategy.mode]]);
                        return [2 /*return*/, retryStrategy.retry(next, args)];
                }
            });
        }); };
    };
};
var retryMiddlewareOptions = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: true,
};
var getRetryPlugin = function (options) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
    },
}); };

/**
 * The base number of milliseconds to use in calculating a suitable cool-down
 * time when a retryable error is encountered.
 */
var DEFAULT_RETRY_DELAY_BASE = 100;
/**
 * The maximum amount of time (in milliseconds) that will be used as a delay
 * between retry attempts.
 */
var MAXIMUM_RETRY_DELAY = 20 * 1000;
/**
 * The retry delay base (in milliseconds) to use when a throttling error is
 * encountered.
 */
var THROTTLING_RETRY_DELAY_BASE = 500;
/**
 * Initial number of retry tokens in Retry Quota
 */
var INITIAL_RETRY_TOKENS = 500;
/**
 * The total amount of retry tokens to be decremented from retry token balance.
 */
var RETRY_COST = 5;
/**
 * The total amount of retry tokens to be decremented from retry token balance
 * when a throttling error is encountered.
 */
var TIMEOUT_RETRY_COST = 10;
/**
 * The total amount of retry token to be incremented from retry token balance
 * if an SDK operation invocation succeeds without requiring a retry request.
 */
var NO_RETRY_INCREMENT = 1;
/**
 * Header name for SDK invocation ID
 */
var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
/**
 * Header name for request retry information.
 */
var REQUEST_HEADER = "amz-sdk-request";

/**
 * Errors encountered when the client clock and server clock cannot agree on the
 * current time.
 *
 * These errors are retryable, assuming the SDK has enabled clock skew
 * correction.
 */
var CLOCK_SKEW_ERROR_CODES = [
    "AuthFailure",
    "InvalidSignatureException",
    "RequestExpired",
    "RequestInTheFuture",
    "RequestTimeTooSkewed",
    "SignatureDoesNotMatch",
];
/**
 * Errors that indicate the SDK is being throttled.
 *
 * These errors are always retryable.
 */
var THROTTLING_ERROR_CODES = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException", // DynamoDB
];
/**
 * Error codes that indicate transient issues
 */
var TRANSIENT_ERROR_CODES = ["AbortError", "TimeoutError", "RequestTimeout", "RequestTimeoutException"];
/**
 * Error codes that indicate transient issues
 */
var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];

var isRetryableByTrait = function (error) { return error.$retryable !== undefined; };
var isClockSkewError = function (error) { return CLOCK_SKEW_ERROR_CODES.includes(error.name); };
var isThrottlingError = function (error) {
    var _a, _b;
    return ((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) === 429 ||
        THROTTLING_ERROR_CODES.includes(error.name) ||
        ((_b = error.$retryable) === null || _b === void 0 ? void 0 : _b.throttling) == true;
};
var isTransientError = function (error) {
    var _a;
    return TRANSIENT_ERROR_CODES.includes(error.name) ||
        TRANSIENT_ERROR_STATUS_CODES.includes(((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) || 0);
};

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto__default["default"].randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

var RETRY_MODES;
(function (RETRY_MODES) {
    RETRY_MODES["STANDARD"] = "standard";
    RETRY_MODES["ADAPTIVE"] = "adaptive";
})(RETRY_MODES || (RETRY_MODES = {}));
/**
 * The default value for how many HTTP requests an SDK should make for a
 * single SDK operation invocation before giving up
 */
var DEFAULT_MAX_ATTEMPTS = 3;
/**
 * The default retry algorithm to use.
 */
var DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;

var getDefaultRetryQuota = function (initialRetryTokens, options) {
    var _a, _b, _c;
    var MAX_CAPACITY = initialRetryTokens;
    var noRetryIncrement = (_a = options === null || options === void 0 ? void 0 : options.noRetryIncrement) !== null && _a !== void 0 ? _a : NO_RETRY_INCREMENT;
    var retryCost = (_b = options === null || options === void 0 ? void 0 : options.retryCost) !== null && _b !== void 0 ? _b : RETRY_COST;
    var timeoutRetryCost = (_c = options === null || options === void 0 ? void 0 : options.timeoutRetryCost) !== null && _c !== void 0 ? _c : TIMEOUT_RETRY_COST;
    var availableCapacity = initialRetryTokens;
    var getCapacityAmount = function (error) { return (error.name === "TimeoutError" ? timeoutRetryCost : retryCost); };
    var hasRetryTokens = function (error) { return getCapacityAmount(error) <= availableCapacity; };
    var retrieveRetryTokens = function (error) {
        if (!hasRetryTokens(error)) {
            // retryStrategy should stop retrying, and return last error
            throw new Error("No retry token available");
        }
        var capacityAmount = getCapacityAmount(error);
        availableCapacity -= capacityAmount;
        return capacityAmount;
    };
    var releaseRetryTokens = function (capacityReleaseAmount) {
        availableCapacity += capacityReleaseAmount !== null && capacityReleaseAmount !== void 0 ? capacityReleaseAmount : noRetryIncrement;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
    };
    return Object.freeze({
        hasRetryTokens: hasRetryTokens,
        retrieveRetryTokens: retrieveRetryTokens,
        releaseRetryTokens: releaseRetryTokens,
    });
};

/**
 * Calculate a capped, fully-jittered exponential backoff time.
 */
var defaultDelayDecider = function (delayBase, attempts) {
    return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * Math.pow(2, attempts) * delayBase));
};

var defaultRetryDecider = function (error) {
    if (!error) {
        return false;
    }
    return isRetryableByTrait(error) || isClockSkewError(error) || isThrottlingError(error) || isTransientError(error);
};

var StandardRetryStrategy = /** @class */ (function () {
    function StandardRetryStrategy(maxAttemptsProvider, options) {
        var _a, _b, _c;
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = RETRY_MODES.STANDARD;
        this.retryDecider = (_a = options === null || options === void 0 ? void 0 : options.retryDecider) !== null && _a !== void 0 ? _a : defaultRetryDecider;
        this.delayDecider = (_b = options === null || options === void 0 ? void 0 : options.delayDecider) !== null && _b !== void 0 ? _b : defaultDelayDecider;
        this.retryQuota = (_c = options === null || options === void 0 ? void 0 : options.retryQuota) !== null && _c !== void 0 ? _c : getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
    }
    StandardRetryStrategy.prototype.shouldRetry = function (error, attempts, maxAttempts) {
        return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
    };
    StandardRetryStrategy.prototype.getMaxAttempts = function () {
        return index.__awaiter(this, void 0, void 0, function () {
            var maxAttempts;
            return index.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.maxAttemptsProvider()];
                    case 1:
                        maxAttempts = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a.sent();
                        maxAttempts = DEFAULT_MAX_ATTEMPTS;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, maxAttempts];
                }
            });
        });
    };
    StandardRetryStrategy.prototype.retry = function (next, args, options) {
        return index.__awaiter(this, void 0, void 0, function () {
            var retryTokenAmount, attempts, totalDelay, maxAttempts, request, _loop_1, this_1, state_1;
            return index.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        attempts = 0;
                        totalDelay = 0;
                        return [4 /*yield*/, this.getMaxAttempts()];
                    case 1:
                        maxAttempts = _a.sent();
                        request = args.request;
                        if (index.HttpRequest.isInstance(request)) {
                            request.headers[INVOCATION_ID_HEADER] = v4();
                        }
                        _loop_1 = function () {
                            var _b, response, output, e_1, err, delay_1;
                            return index.__generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _c.trys.push([0, 4, , 7]);
                                        if (index.HttpRequest.isInstance(request)) {
                                            request.headers[REQUEST_HEADER] = "attempt=" + (attempts + 1) + "; max=" + maxAttempts;
                                        }
                                        if (!(options === null || options === void 0 ? void 0 : options.beforeRequest)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, options.beforeRequest()];
                                    case 1:
                                        _c.sent();
                                        _c.label = 2;
                                    case 2: return [4 /*yield*/, next(args)];
                                    case 3:
                                        _b = _c.sent(), response = _b.response, output = _b.output;
                                        if (options === null || options === void 0 ? void 0 : options.afterRequest) {
                                            options.afterRequest(response);
                                        }
                                        this_1.retryQuota.releaseRetryTokens(retryTokenAmount);
                                        output.$metadata.attempts = attempts + 1;
                                        output.$metadata.totalRetryDelay = totalDelay;
                                        return [2 /*return*/, { value: { response: response, output: output } }];
                                    case 4:
                                        e_1 = _c.sent();
                                        err = asSdkError(e_1);
                                        attempts++;
                                        if (!this_1.shouldRetry(err, attempts, maxAttempts)) return [3 /*break*/, 6];
                                        retryTokenAmount = this_1.retryQuota.retrieveRetryTokens(err);
                                        delay_1 = this_1.delayDecider(isThrottlingError(err) ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE, attempts);
                                        totalDelay += delay_1;
                                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, delay_1); })];
                                    case 5:
                                        _c.sent();
                                        return [2 /*return*/, "continue"];
                                    case 6:
                                        if (!err.$metadata) {
                                            err.$metadata = {};
                                        }
                                        err.$metadata.attempts = attempts;
                                        err.$metadata.totalRetryDelay = totalDelay;
                                        throw err;
                                    case 7: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a.label = 2;
                    case 2:
                        return [5 /*yield**/, _loop_1()];
                    case 3:
                        state_1 = _a.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        return [3 /*break*/, 2];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return StandardRetryStrategy;
}());
var asSdkError = function (error) {
    if (error instanceof Error)
        return error;
    if (error instanceof Object)
        return Object.assign(new Error(), error);
    if (typeof error === "string")
        return new Error(error);
    return new Error("AWS SDK error wrapper for " + error);
};

var DefaultRateLimiter = /** @class */ (function () {
    function DefaultRateLimiter(options) {
        var _a, _b, _c, _d, _e;
        // Pre-set state variables
        this.currentCapacity = 0;
        this.enabled = false;
        this.lastMaxRate = 0;
        this.measuredTxRate = 0;
        this.requestCount = 0;
        this.lastTimestamp = 0;
        this.timeWindow = 0;
        this.beta = (_a = options === null || options === void 0 ? void 0 : options.beta) !== null && _a !== void 0 ? _a : 0.7;
        this.minCapacity = (_b = options === null || options === void 0 ? void 0 : options.minCapacity) !== null && _b !== void 0 ? _b : 1;
        this.minFillRate = (_c = options === null || options === void 0 ? void 0 : options.minFillRate) !== null && _c !== void 0 ? _c : 0.5;
        this.scaleConstant = (_d = options === null || options === void 0 ? void 0 : options.scaleConstant) !== null && _d !== void 0 ? _d : 0.4;
        this.smooth = (_e = options === null || options === void 0 ? void 0 : options.smooth) !== null && _e !== void 0 ? _e : 0.8;
        var currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
    }
    DefaultRateLimiter.prototype.getCurrentTimeInSeconds = function () {
        return Date.now() / 1000;
    };
    DefaultRateLimiter.prototype.getSendToken = function () {
        return index.__awaiter(this, void 0, void 0, function () {
            return index.__generator(this, function (_a) {
                return [2 /*return*/, this.acquireTokenBucket(1)];
            });
        });
    };
    DefaultRateLimiter.prototype.acquireTokenBucket = function (amount) {
        return index.__awaiter(this, void 0, void 0, function () {
            var delay_1;
            return index.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Client side throttling is not enabled until we see a throttling error.
                        if (!this.enabled) {
                            return [2 /*return*/];
                        }
                        this.refillTokenBucket();
                        if (!(amount > this.currentCapacity)) return [3 /*break*/, 2];
                        delay_1 = ((amount - this.currentCapacity) / this.fillRate) * 1000;
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, delay_1); })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.currentCapacity = this.currentCapacity - amount;
                        return [2 /*return*/];
                }
            });
        });
    };
    DefaultRateLimiter.prototype.refillTokenBucket = function () {
        var timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
            return;
        }
        var fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
    };
    DefaultRateLimiter.prototype.updateClientSendingRate = function (response) {
        var calculatedRate;
        this.updateMeasuredRate();
        if (isThrottlingError(response)) {
            var rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
            this.lastMaxRate = rateToUse;
            this.calculateTimeWindow();
            this.lastThrottleTime = this.getCurrentTimeInSeconds();
            calculatedRate = this.cubicThrottle(rateToUse);
            this.enableTokenBucket();
        }
        else {
            this.calculateTimeWindow();
            calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        var newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
    };
    DefaultRateLimiter.prototype.calculateTimeWindow = function () {
        this.timeWindow = this.getPrecise(Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 1 / 3));
    };
    DefaultRateLimiter.prototype.cubicThrottle = function (rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
    };
    DefaultRateLimiter.prototype.cubicSuccess = function (timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    };
    DefaultRateLimiter.prototype.enableTokenBucket = function () {
        this.enabled = true;
    };
    DefaultRateLimiter.prototype.updateTokenBucketRate = function (newRate) {
        // Refill based on our current rate before we update to the new fill rate.
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        // When we scale down we can't have a current capacity that exceeds our maxCapacity.
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
    };
    DefaultRateLimiter.prototype.updateMeasuredRate = function () {
        var t = this.getCurrentTimeInSeconds();
        var timeBucket = Math.floor(t * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
            var currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
            this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
            this.requestCount = 0;
            this.lastTxRateBucket = timeBucket;
        }
    };
    DefaultRateLimiter.prototype.getPrecise = function (num) {
        return parseFloat(num.toFixed(8));
    };
    return DefaultRateLimiter;
}());

var AdaptiveRetryStrategy = /** @class */ (function (_super) {
    index.__extends(AdaptiveRetryStrategy, _super);
    function AdaptiveRetryStrategy(maxAttemptsProvider, options) {
        var _this = this;
        var _a = options !== null && options !== void 0 ? options : {}, rateLimiter = _a.rateLimiter, superOptions = index.__rest(_a, ["rateLimiter"]);
        _this = _super.call(this, maxAttemptsProvider, superOptions) || this;
        _this.rateLimiter = rateLimiter !== null && rateLimiter !== void 0 ? rateLimiter : new DefaultRateLimiter();
        _this.mode = RETRY_MODES.ADAPTIVE;
        return _this;
    }
    AdaptiveRetryStrategy.prototype.retry = function (next, args) {
        return index.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return index.__generator(this, function (_a) {
                return [2 /*return*/, _super.prototype.retry.call(this, next, args, {
                        beforeRequest: function () { return index.__awaiter(_this, void 0, void 0, function () {
                            return index.__generator(this, function (_a) {
                                return [2 /*return*/, this.rateLimiter.getSendToken()];
                            });
                        }); },
                        afterRequest: function (response) {
                            _this.rateLimiter.updateClientSendingRate(response);
                        },
                    })];
            });
        });
    };
    return AdaptiveRetryStrategy;
}(StandardRetryStrategy));

var ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
var CONFIG_MAX_ATTEMPTS = "max_attempts";
var NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
    environmentVariableSelector: function (env) {
        var value = env[ENV_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        var maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error("Environment variable " + ENV_MAX_ATTEMPTS + " mast be a number, got \"" + value + "\"");
        }
        return maxAttempt;
    },
    configFileSelector: function (profile) {
        var value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        var maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error("Shared config file entry " + CONFIG_MAX_ATTEMPTS + " mast be a number, got \"" + value + "\"");
        }
        return maxAttempt;
    },
    default: DEFAULT_MAX_ATTEMPTS,
};
var resolveRetryConfig = function (input) {
    var maxAttempts = normalizeMaxAttempts(input.maxAttempts);
    return index.__assign(index.__assign({}, input), { maxAttempts: maxAttempts, retryStrategy: function () { return index.__awaiter(void 0, void 0, void 0, function () {
            var retryMode;
            return index.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (input.retryStrategy) {
                            return [2 /*return*/, input.retryStrategy];
                        }
                        return [4 /*yield*/, getRetryMode(input.retryMode)];
                    case 1:
                        retryMode = _a.sent();
                        if (retryMode === RETRY_MODES.ADAPTIVE) {
                            return [2 /*return*/, new AdaptiveRetryStrategy(maxAttempts)];
                        }
                        return [2 /*return*/, new StandardRetryStrategy(maxAttempts)];
                }
            });
        }); } });
};
var getRetryMode = function (retryMode) { return index.__awaiter(void 0, void 0, void 0, function () {
    return index.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (typeof retryMode === "string") {
                    return [2 /*return*/, retryMode];
                }
                return [4 /*yield*/, retryMode()];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var normalizeMaxAttempts = function (maxAttempts) {
    if (maxAttempts === void 0) { maxAttempts = DEFAULT_MAX_ATTEMPTS; }
    if (typeof maxAttempts === "number") {
        var promisified_1 = Promise.resolve(maxAttempts);
        return function () { return promisified_1; };
    }
    return maxAttempts;
};
var ENV_RETRY_MODE = "AWS_RETRY_MODE";
var CONFIG_RETRY_MODE = "retry_mode";
var NODE_RETRY_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: function (env) { return env[ENV_RETRY_MODE]; },
    configFileSelector: function (profile) { return profile[CONFIG_RETRY_MODE]; },
    default: DEFAULT_RETRY_MODE,
};

function buildQueryString(query) {
    var e_1, _a;
    var parts = [];
    try {
        for (var _b = index.__values(Object.keys(query).sort()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var value = query[key];
            key = escapeUri(key);
            if (Array.isArray(value)) {
                for (var i = 0, iLen = value.length; i < iLen; i++) {
                    parts.push(key + "=" + escapeUri(value[i]));
                }
            }
            else {
                var qsEntry = key;
                if (value || typeof value === "string") {
                    qsEntry += "=" + escapeUri(value);
                }
                parts.push(qsEntry);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return parts.join("&");
}

/**
 * Node.js system error codes that indicate timeout.
 */
var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];

var getTransformedHeaders = function (headers) {
    var e_1, _a;
    var transformedHeaders = {};
    try {
        for (var _b = index.__values(Object.keys(headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var name = _c.value;
            var headerValues = headers[name];
            transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return transformedHeaders;
};

var setConnectionTimeout = function (request, reject, timeoutInMs) {
    if (timeoutInMs === void 0) { timeoutInMs = 0; }
    if (!timeoutInMs) {
        return;
    }
    request.on("socket", function (socket) {
        if (socket.connecting) {
            // Throw a connecting timeout error unless a connection is made within x time.
            var timeoutId_1 = setTimeout(function () {
                // destroy the request.
                request.destroy();
                reject(Object.assign(new Error("Socket timed out without establishing a connection within " + timeoutInMs + " ms"), {
                    name: "TimeoutError",
                }));
            }, timeoutInMs);
            // if the connection was established, cancel the timeout.
            socket.on("connect", function () {
                clearTimeout(timeoutId_1);
            });
        }
    });
};

var setSocketTimeout = function (request, reject, timeoutInMs) {
    if (timeoutInMs === void 0) { timeoutInMs = 0; }
    request.setTimeout(timeoutInMs, function () {
        // destroy the request
        request.destroy();
        reject(Object.assign(new Error("Connection timed out after " + timeoutInMs + " ms"), { name: "TimeoutError" }));
    });
};

function writeRequestBody(httpRequest, request) {
    var expect = request.headers["Expect"] || request.headers["expect"];
    if (expect === "100-continue") {
        httpRequest.on("continue", function () {
            writeBody(httpRequest, request.body);
        });
    }
    else {
        writeBody(httpRequest, request.body);
    }
}
function writeBody(httpRequest, body) {
    if (body instanceof Stream.Readable) {
        // pipe automatically handles end
        body.pipe(httpRequest);
    }
    else if (body) {
        httpRequest.end(Buffer.from(body));
    }
    else {
        httpRequest.end();
    }
}

var NodeHttpHandler = /** @class */ (function () {
    function NodeHttpHandler(_a) {
        var _b = _a === void 0 ? {} : _a, connectionTimeout = _b.connectionTimeout, socketTimeout = _b.socketTimeout, httpAgent = _b.httpAgent, httpsAgent = _b.httpsAgent;
        // Node http handler is hard-coded to http/1.1: https://github.com/nodejs/node/blob/ff5664b83b89c55e4ab5d5f60068fb457f1f5872/lib/_http_server.js#L286
        this.metadata = { handlerProtocol: "http/1.1" };
        this.connectionTimeout = connectionTimeout;
        this.socketTimeout = socketTimeout;
        var keepAlive = true;
        var maxSockets = 50;
        this.httpAgent = httpAgent || new http.Agent({ keepAlive: keepAlive, maxSockets: maxSockets });
        this.httpsAgent = httpsAgent || new https.Agent({ keepAlive: keepAlive, maxSockets: maxSockets });
    }
    NodeHttpHandler.prototype.destroy = function () {
        this.httpAgent.destroy();
        this.httpsAgent.destroy();
    };
    NodeHttpHandler.prototype.handle = function (request, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, abortSignal = _b.abortSignal;
        return new Promise(function (resolve, reject) {
            // if the request was already aborted, prevent doing extra work
            if (abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.aborted) {
                var abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
                return;
            }
            // determine which http(s) client to use
            var isSSL = request.protocol === "https:";
            var queryString = buildQueryString(request.query || {});
            var nodeHttpsOptions = {
                headers: request.headers,
                host: request.hostname,
                method: request.method,
                path: queryString ? request.path + "?" + queryString : request.path,
                port: request.port,
                agent: isSSL ? _this.httpsAgent : _this.httpAgent,
            };
            // create the http request
            var requestFunc = isSSL ? https.request : http.request;
            var req = requestFunc(nodeHttpsOptions, function (res) {
                var httpResponse = new index.HttpResponse({
                    statusCode: res.statusCode || -1,
                    headers: getTransformedHeaders(res.headers),
                    body: res,
                });
                resolve({ response: httpResponse });
            });
            req.on("error", function (err) {
                if (NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
                    reject(Object.assign(err, { name: "TimeoutError" }));
                }
                else {
                    reject(err);
                }
            });
            // wire-up any timeout logic
            setConnectionTimeout(req, reject, _this.connectionTimeout);
            setSocketTimeout(req, reject, _this.socketTimeout);
            // wire-up abort logic
            if (abortSignal) {
                abortSignal.onabort = function () {
                    // ensure request is destroyed
                    req.abort();
                    var abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    reject(abortError);
                };
            }
            writeRequestBody(req, request);
        });
    };
    return NodeHttpHandler;
}());

var Collector = /** @class */ (function (_super) {
    index.__extends(Collector, _super);
    function Collector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bufferedBytes = [];
        return _this;
    }
    Collector.prototype._write = function (chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
    };
    return Collector;
}(Stream.Writable));

var streamCollector = function (stream) {
    return new Promise(function (resolve, reject) {
        var collector = new Collector();
        stream.pipe(collector);
        stream.on("error", function (err) {
            // if the source errors, the destination stream needs to manually end
            collector.end();
            reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function () {
            var bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
            resolve(bytes);
        });
    });
};

var BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
/**
 * Converts a base-64 encoded string to a Uint8Array of bytes using Node.JS's
 * `buffer` module.
 *
 * @param input The base-64 encoded string
 */
function fromBase64(input) {
    // Node's buffer module allows padding to be omitted, but we want to enforce
    // it. So here we ensure that the input represents a number of bits divisible
    // by 8. Each character represents 6 bits, so after reducing the fraction we
    // end up mulitplying by 3/4 and checking for a remainder.
    if ((input.length * 3) % 4 !== 0) {
        throw new TypeError("Incorrect padding on base64 string.");
    }
    // Node will just ingore invalid characters, so we need to make sure they're
    // properly rejected.
    if (!BASE64_REGEX.exec(input)) {
        throw new TypeError("Invalid base64 string.");
    }
    var buffer = fromString(input, "base64");
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
}
/**
 * Converts a Uint8Array of binary data to a base-64 encoded string using
 * Node.JS's `buffer` module.
 *
 * @param input The binary data to encode
 */
function toBase64(input) {
    return fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("base64");
}

function calculateBodyLength(body) {
    if (!body) {
        return 0;
    }
    if (typeof body === "string") {
        return Buffer.from(body).length;
    }
    else if (typeof body.byteLength === "number") {
        // handles Uint8Array, ArrayBuffer, Buffer, and ArrayBufferView
        return body.byteLength;
    }
    else if (typeof body.size === "number") {
        return body.size;
    }
    else if (typeof body.path === "string") {
        // handles fs readable streams
        return fs.lstatSync(body.path).size;
    }
}

var isCrtAvailable = function () {
    try {
        // Attempt to load ambient package aws-crt to verify if it exists.
        // We cannot use dynamic import(https://github.com/tc39/proposal-dynamic-import) here because bundlers
        // (WebPack, Rollup) will try to bundle this optional dependency and fail to build if not exist.
        // Thus this user agent key will only available in Node.js runtime.
        if (typeof require === "function" && typeof module !== "undefined" && module.require && require("aws-crt")) {
            // Validate `module` to make sure this is not in a `require.js` scope.
            // TODO: load package version.
            return ["md/crt-avail"];
        }
        return null;
    }
    catch (e) {
        // No aws-crt package available in the runtime.
        return null;
    }
};

var UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
var UA_APP_ID_INI_NAME = "sdk-ua-app-id";
/**
 * Collect metrics from runtime to put into user agent.
 */
var defaultUserAgent = function (_a) {
    var serviceId = _a.serviceId, clientVersion = _a.clientVersion;
    var sections = [
        // sdk-metadata
        ["aws-sdk-js", clientVersion],
        // os-metadata
        ["os/" + os.platform(), os.release()],
        // language-metadata
        // ECMAScript edition doesn't matter in JS, so no version needed.
        ["lang/js"],
        ["md/nodejs", "" + process$1.versions.node],
    ];
    var crtAvailable = isCrtAvailable();
    if (crtAvailable) {
        sections.push(crtAvailable);
    }
    if (serviceId) {
        // api-metadata
        // service Id may not appear in non-AWS clients
        sections.push(["api/" + serviceId, clientVersion]);
    }
    if (process$1.env.AWS_EXECUTION_ENV) {
        // env-metadata
        sections.push(["exec-env/" + process$1.env.AWS_EXECUTION_ENV]);
    }
    var appIdPromise = loadConfig({
        environmentVariableSelector: function (env) { return env[UA_APP_ID_ENV_NAME]; },
        configFileSelector: function (profile) { return profile[UA_APP_ID_INI_NAME]; },
        default: undefined,
    })();
    var resolvedUserAgent = undefined;
    return function () { return index.__awaiter(void 0, void 0, void 0, function () {
        var appId;
        return index.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!resolvedUserAgent) return [3 /*break*/, 2];
                    return [4 /*yield*/, appIdPromise];
                case 1:
                    appId = _a.sent();
                    resolvedUserAgent = appId ? index.__spreadArray(index.__spreadArray([], index.__read(sections)), [["app/" + appId]]) : index.__spreadArray([], index.__read(sections));
                    _a.label = 2;
                case 2: return [2 /*return*/, resolvedUserAgent];
            }
        });
    }); };
};

var fromUtf8 = function (input) {
    var buf = fromString(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};
var toUtf8 = function (input) {
    return fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
};

var regionHash$2 = {
    "ap-southeast-1": {
        hostname: "portal.sso.ap-southeast-1.amazonaws.com",
        signingRegion: "ap-southeast-1",
    },
    "ap-southeast-2": {
        hostname: "portal.sso.ap-southeast-2.amazonaws.com",
        signingRegion: "ap-southeast-2",
    },
    "ca-central-1": {
        hostname: "portal.sso.ca-central-1.amazonaws.com",
        signingRegion: "ca-central-1",
    },
    "eu-central-1": {
        hostname: "portal.sso.eu-central-1.amazonaws.com",
        signingRegion: "eu-central-1",
    },
    "eu-west-1": {
        hostname: "portal.sso.eu-west-1.amazonaws.com",
        signingRegion: "eu-west-1",
    },
    "eu-west-2": {
        hostname: "portal.sso.eu-west-2.amazonaws.com",
        signingRegion: "eu-west-2",
    },
    "us-east-1": {
        hostname: "portal.sso.us-east-1.amazonaws.com",
        signingRegion: "us-east-1",
    },
    "us-east-2": {
        hostname: "portal.sso.us-east-2.amazonaws.com",
        signingRegion: "us-east-2",
    },
    "us-west-2": {
        hostname: "portal.sso.us-west-2.amazonaws.com",
        signingRegion: "us-west-2",
    },
};
var partitionHash$2 = {
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
            "me-south-1",
            "sa-east-1",
            "us-east-1",
            "us-east-2",
            "us-west-1",
            "us-west-2",
        ],
        hostname: "portal.sso.{region}.amazonaws.com",
    },
    "aws-cn": {
        regions: ["cn-north-1", "cn-northwest-1"],
        hostname: "portal.sso.{region}.amazonaws.com.cn",
    },
    "aws-iso": {
        regions: ["us-iso-east-1"],
        hostname: "portal.sso.{region}.c2s.ic.gov",
    },
    "aws-iso-b": {
        regions: ["us-isob-east-1"],
        hostname: "portal.sso.{region}.sc2s.sgov.gov",
    },
    "aws-us-gov": {
        regions: ["us-gov-east-1", "us-gov-west-1"],
        hostname: "portal.sso.{region}.amazonaws.com",
    },
};
var defaultRegionInfoProvider$2 = function (region, options) { return index.__awaiter(void 0, void 0, void 0, function () {
    return index.__generator(this, function (_a) {
        return [2 /*return*/, getRegionInfo(region, index.__assign(index.__assign({}, options), { signingService: "awsssoportal", regionHash: regionHash$2, partitionHash: partitionHash$2 }))];
    });
}); };

/**
 * @internal
 */
var getRuntimeConfig$5 = function (config) {
    var _a, _b, _c, _d, _e;
    return ({
        apiVersion: "2019-06-10",
        disableHostPrefix: (_a = config === null || config === void 0 ? void 0 : config.disableHostPrefix) !== null && _a !== void 0 ? _a : false,
        logger: (_b = config === null || config === void 0 ? void 0 : config.logger) !== null && _b !== void 0 ? _b : {},
        regionInfoProvider: (_c = config === null || config === void 0 ? void 0 : config.regionInfoProvider) !== null && _c !== void 0 ? _c : defaultRegionInfoProvider$2,
        serviceId: (_d = config === null || config === void 0 ? void 0 : config.serviceId) !== null && _d !== void 0 ? _d : "SSO",
        urlParser: (_e = config === null || config === void 0 ? void 0 : config.urlParser) !== null && _e !== void 0 ? _e : parseUrl,
    });
};

/**
 * @internal
 */
var getRuntimeConfig$4 = function (config) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    emitWarningIfUnsupportedVersion(process.version);
    var clientSharedValues = getRuntimeConfig$5(config);
    return index.__assign(index.__assign(index.__assign({}, clientSharedValues), config), { runtime: "node", base64Decoder: (_a = config === null || config === void 0 ? void 0 : config.base64Decoder) !== null && _a !== void 0 ? _a : fromBase64, base64Encoder: (_b = config === null || config === void 0 ? void 0 : config.base64Encoder) !== null && _b !== void 0 ? _b : toBase64, bodyLengthChecker: (_c = config === null || config === void 0 ? void 0 : config.bodyLengthChecker) !== null && _c !== void 0 ? _c : calculateBodyLength, defaultUserAgentProvider: (_d = config === null || config === void 0 ? void 0 : config.defaultUserAgentProvider) !== null && _d !== void 0 ? _d : defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: packageInfo.version }), maxAttempts: (_e = config === null || config === void 0 ? void 0 : config.maxAttempts) !== null && _e !== void 0 ? _e : loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS), region: (_f = config === null || config === void 0 ? void 0 : config.region) !== null && _f !== void 0 ? _f : loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS), requestHandler: (_g = config === null || config === void 0 ? void 0 : config.requestHandler) !== null && _g !== void 0 ? _g : new NodeHttpHandler(), retryMode: (_h = config === null || config === void 0 ? void 0 : config.retryMode) !== null && _h !== void 0 ? _h : loadConfig(NODE_RETRY_MODE_CONFIG_OPTIONS), sha256: (_j = config === null || config === void 0 ? void 0 : config.sha256) !== null && _j !== void 0 ? _j : Hash.bind(null, "sha256"), streamCollector: (_k = config === null || config === void 0 ? void 0 : config.streamCollector) !== null && _k !== void 0 ? _k : streamCollector, utf8Decoder: (_l = config === null || config === void 0 ? void 0 : config.utf8Decoder) !== null && _l !== void 0 ? _l : fromUtf8, utf8Encoder: (_m = config === null || config === void 0 ? void 0 : config.utf8Encoder) !== null && _m !== void 0 ? _m : toUtf8 });
};

var CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
    var _this = this;
    return function (next) {
        return function (args) { return index.__awaiter(_this, void 0, void 0, function () {
            var request, body, headers, length;
            var _a;
            return index.__generator(this, function (_b) {
                request = args.request;
                if (index.HttpRequest.isInstance(request)) {
                    body = request.body, headers = request.headers;
                    if (body &&
                        Object.keys(headers)
                            .map(function (str) { return str.toLowerCase(); })
                            .indexOf(CONTENT_LENGTH_HEADER) === -1) {
                        length = bodyLengthChecker(body);
                        if (length !== undefined) {
                            request.headers = index.__assign(index.__assign({}, request.headers), (_a = {}, _a[CONTENT_LENGTH_HEADER] = String(length), _a));
                        }
                    }
                }
                return [2 /*return*/, next(index.__assign(index.__assign({}, args), { request: request }))];
            });
        }); };
    };
}
var contentLengthMiddlewareOptions = {
    step: "build",
    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
    name: "contentLengthMiddleware",
    override: true,
};
var getContentLengthPlugin = function (options) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
    },
}); };

function resolveHostHeaderConfig(input) {
    return input;
}
var hostHeaderMiddleware = function (options) {
    return function (next) {
        return function (args) { return index.__awaiter(void 0, void 0, void 0, function () {
            var request, _a, handlerProtocol;
            return index.__generator(this, function (_b) {
                if (!index.HttpRequest.isInstance(args.request))
                    return [2 /*return*/, next(args)];
                request = args.request;
                _a = (options.requestHandler.metadata || {}).handlerProtocol, handlerProtocol = _a === void 0 ? "" : _a;
                //For H2 request, remove 'host' header and use ':authority' header instead
                //reference: https://nodejs.org/dist/latest-v13.x/docs/api/errors.html#ERR_HTTP2_INVALID_CONNECTION_HEADERS
                if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
                    delete request.headers["host"];
                    request.headers[":authority"] = "";
                    //non-H2 request and 'host' header is not set, set the 'host' header to request's hostname.
                }
                else if (!request.headers["host"]) {
                    request.headers["host"] = request.hostname;
                }
                return [2 /*return*/, next(args)];
            });
        }); };
    };
};
var hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: true,
};
var getHostHeaderPlugin = function (options) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
    },
}); };

var loggerMiddleware = function () {
    return function (next, context) {
        return function (args) { return index.__awaiter(void 0, void 0, void 0, function () {
            var clientName, commandName, inputFilterSensitiveLog, logger, outputFilterSensitiveLog, response, _a, $metadata, outputWithoutMetadata;
            return index.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        clientName = context.clientName, commandName = context.commandName, inputFilterSensitiveLog = context.inputFilterSensitiveLog, logger = context.logger, outputFilterSensitiveLog = context.outputFilterSensitiveLog;
                        return [4 /*yield*/, next(args)];
                    case 1:
                        response = _b.sent();
                        if (!logger) {
                            return [2 /*return*/, response];
                        }
                        if (typeof logger.info === "function") {
                            _a = response.output, $metadata = _a.$metadata, outputWithoutMetadata = index.__rest(_a, ["$metadata"]);
                            logger.info({
                                clientName: clientName,
                                commandName: commandName,
                                input: inputFilterSensitiveLog(args.input),
                                output: outputFilterSensitiveLog(outputWithoutMetadata),
                                metadata: $metadata,
                            });
                        }
                        return [2 /*return*/, response];
                }
            });
        }); };
    };
};
var loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true,
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var getLoggerPlugin = function (options) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
    },
}); };

function resolveUserAgentConfig(input) {
    return index.__assign(index.__assign({}, input), { customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent });
}

var USER_AGENT = "user-agent";
var X_AMZ_USER_AGENT = "x-amz-user-agent";
var SPACE = " ";
var UA_ESCAPE_REGEX = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;

/**
 * Build user agent header sections from:
 * 1. runtime-specific default user agent provider;
 * 2. custom user agent from `customUserAgent` client config;
 * 3. handler execution context set by internal SDK components;
 * The built user agent will be set to `x-amz-user-agent` header for ALL the
 * runtimes.
 * Please note that any override to the `user-agent` or `x-amz-user-agent` header
 * in the HTTP request is discouraged. Please use `customUserAgent` client
 * config or middleware setting the `userAgent` context to generate desired user
 * agent.
 */
var userAgentMiddleware = function (options) {
    return function (next, context) {
        return function (args) { return index.__awaiter(void 0, void 0, void 0, function () {
            var request, headers, userAgent, defaultUserAgent, customUserAgent, sdkUserAgentValue, normalUAValue;
            var _a, _b;
            return index.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        request = args.request;
                        if (!index.HttpRequest.isInstance(request))
                            return [2 /*return*/, next(args)];
                        headers = request.headers;
                        userAgent = ((_a = context === null || context === void 0 ? void 0 : context.userAgent) === null || _a === void 0 ? void 0 : _a.map(escapeUserAgent)) || [];
                        return [4 /*yield*/, options.defaultUserAgentProvider()];
                    case 1:
                        defaultUserAgent = (_c.sent()).map(escapeUserAgent);
                        customUserAgent = ((_b = options === null || options === void 0 ? void 0 : options.customUserAgent) === null || _b === void 0 ? void 0 : _b.map(escapeUserAgent)) || [];
                        sdkUserAgentValue = index.__spreadArray(index.__spreadArray(index.__spreadArray([], index.__read(defaultUserAgent)), index.__read(userAgent)), index.__read(customUserAgent)).join(SPACE);
                        normalUAValue = index.__spreadArray(index.__spreadArray([], index.__read(defaultUserAgent.filter(function (section) { return section.startsWith("aws-sdk-"); }))), index.__read(customUserAgent)).join(SPACE);
                        if (options.runtime !== "browser") {
                            if (normalUAValue) {
                                headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT]
                                    ? headers[USER_AGENT] + " " + normalUAValue
                                    : normalUAValue;
                            }
                            headers[USER_AGENT] = sdkUserAgentValue;
                        }
                        else {
                            headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
                        }
                        return [2 /*return*/, next(index.__assign(index.__assign({}, args), { request: request }))];
                }
            });
        }); };
    };
};
/**
 * Escape the each pair according to https://tools.ietf.org/html/rfc5234 and join the pair with pattern `name/version`.
 * User agent name may include prefix like `md/`, `api/`, `os/` etc., we should not escape the `/` after the prefix.
 * @private
 */
var escapeUserAgent = function (_a) {
    var _b = index.__read(_a, 2), name = _b[0], version = _b[1];
    var prefixSeparatorIndex = name.indexOf("/");
    var prefix = name.substring(0, prefixSeparatorIndex); // If no prefix, prefix is just ""
    var uaName = name.substring(prefixSeparatorIndex + 1);
    if (prefix === "api") {
        uaName = uaName.toLowerCase();
    }
    return [prefix, uaName, version]
        .filter(function (item) { return item && item.length > 0; })
        .map(function (item) { return item === null || item === void 0 ? void 0 : item.replace(UA_ESCAPE_REGEX, "_"); })
        .join("/");
};
var getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: true,
};
var getUserAgentPlugin = function (config) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
    },
}); };

/**
 * <p>AWS Single Sign-On Portal is a web service that makes it easy for you to assign user
 *       access to AWS SSO resources such as the user portal. Users can get AWS account applications
 *       and roles assigned to them and get federated into the application.</p>
 *
 *          <p>For general information about AWS SSO, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">What is AWS
 *         Single Sign-On?</a> in the <i>AWS SSO User Guide</i>.</p>
 *
 *          <p>This API reference guide describes the AWS SSO Portal operations that you can call
 *       programatically and includes detailed information on data types and errors.</p>
 *
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for various programming
 *         languages and platforms, such as Java, Ruby, .Net, iOS, or Android. The SDKs provide a
 *         convenient way to create programmatic access to AWS SSO and other AWS services. For more
 *         information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          </note>
 */
var SSOClient = /** @class */ (function (_super) {
    index.__extends(SSOClient, _super);
    function SSOClient(configuration) {
        var _this = this;
        var _config_0 = getRuntimeConfig$4(configuration);
        var _config_1 = resolveRegionConfig(_config_0);
        var _config_2 = resolveEndpointsConfig(_config_1);
        var _config_3 = resolveRetryConfig(_config_2);
        var _config_4 = resolveHostHeaderConfig(_config_3);
        var _config_5 = resolveUserAgentConfig(_config_4);
        _this = _super.call(this, _config_5) || this;
        _this.config = _config_5;
        _this.middlewareStack.use(getRetryPlugin(_this.config));
        _this.middlewareStack.use(getContentLengthPlugin(_this.config));
        _this.middlewareStack.use(getHostHeaderPlugin(_this.config));
        _this.middlewareStack.use(getLoggerPlugin(_this.config));
        _this.middlewareStack.use(getUserAgentPlugin(_this.config));
        return _this;
    }
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    SSOClient.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return SSOClient;
}(index.Client));

var AccountInfo;
(function (AccountInfo) {
    /**
     * @internal
     */
    AccountInfo.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(AccountInfo || (AccountInfo = {}));
var GetRoleCredentialsRequest;
(function (GetRoleCredentialsRequest) {
    /**
     * @internal
     */
    GetRoleCredentialsRequest.filterSensitiveLog = function (obj) { return (index.__assign(index.__assign({}, obj), (obj.accessToken && { accessToken: index.SENSITIVE_STRING }))); };
})(GetRoleCredentialsRequest || (GetRoleCredentialsRequest = {}));
var RoleCredentials;
(function (RoleCredentials) {
    /**
     * @internal
     */
    RoleCredentials.filterSensitiveLog = function (obj) { return (index.__assign(index.__assign(index.__assign({}, obj), (obj.secretAccessKey && { secretAccessKey: index.SENSITIVE_STRING })), (obj.sessionToken && { sessionToken: index.SENSITIVE_STRING }))); };
})(RoleCredentials || (RoleCredentials = {}));
var GetRoleCredentialsResponse;
(function (GetRoleCredentialsResponse) {
    /**
     * @internal
     */
    GetRoleCredentialsResponse.filterSensitiveLog = function (obj) { return (index.__assign(index.__assign({}, obj), (obj.roleCredentials && { roleCredentials: RoleCredentials.filterSensitiveLog(obj.roleCredentials) }))); };
})(GetRoleCredentialsResponse || (GetRoleCredentialsResponse = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(InvalidRequestException || (InvalidRequestException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(TooManyRequestsException || (TooManyRequestsException = {}));
var UnauthorizedException;
(function (UnauthorizedException) {
    /**
     * @internal
     */
    UnauthorizedException.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(UnauthorizedException || (UnauthorizedException = {}));
var ListAccountRolesRequest;
(function (ListAccountRolesRequest) {
    /**
     * @internal
     */
    ListAccountRolesRequest.filterSensitiveLog = function (obj) { return (index.__assign(index.__assign({}, obj), (obj.accessToken && { accessToken: index.SENSITIVE_STRING }))); };
})(ListAccountRolesRequest || (ListAccountRolesRequest = {}));
var RoleInfo;
(function (RoleInfo) {
    /**
     * @internal
     */
    RoleInfo.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(RoleInfo || (RoleInfo = {}));
var ListAccountRolesResponse;
(function (ListAccountRolesResponse) {
    /**
     * @internal
     */
    ListAccountRolesResponse.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(ListAccountRolesResponse || (ListAccountRolesResponse = {}));
var ListAccountsRequest;
(function (ListAccountsRequest) {
    /**
     * @internal
     */
    ListAccountsRequest.filterSensitiveLog = function (obj) { return (index.__assign(index.__assign({}, obj), (obj.accessToken && { accessToken: index.SENSITIVE_STRING }))); };
})(ListAccountsRequest || (ListAccountsRequest = {}));
var ListAccountsResponse;
(function (ListAccountsResponse) {
    /**
     * @internal
     */
    ListAccountsResponse.filterSensitiveLog = function (obj) { return (index.__assign({}, obj)); };
})(ListAccountsResponse || (ListAccountsResponse = {}));
var LogoutRequest;
(function (LogoutRequest) {
    /**
     * @internal
     */
    LogoutRequest.filterSensitiveLog = function (obj) { return (index.__assign(index.__assign({}, obj), (obj.accessToken && { accessToken: index.SENSITIVE_STRING }))); };
})(LogoutRequest || (LogoutRequest = {}));

var serializeAws_restJson1GetRoleCredentialsCommand = function (input, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, basePath, headers, resolvedPath, query, body;
    return index.__generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port, basePath = _a.path;
                headers = index.__assign({}, (isSerializableHeaderValue(input.accessToken) && { "x-amz-sso_bearer_token": input.accessToken }));
                resolvedPath = "" + ((basePath === null || basePath === void 0 ? void 0 : basePath.endsWith("/")) ? basePath.slice(0, -1) : basePath || "") + "/federation/credentials";
                query = index.__assign(index.__assign({}, (input.roleName !== undefined && { role_name: input.roleName })), (input.accountId !== undefined && { account_id: input.accountId }));
                return [2 /*return*/, new index.HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
var deserializeAws_restJson1GetRoleCredentialsCommand = function (output, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var contents, data, _a, _b;
    return index.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetRoleCredentialsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    roleCredentials: undefined,
                };
                _a = index.expectNonNull;
                _b = index.expectObject;
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.apply(void 0, [_b.apply(void 0, [_c.sent()]), "body"]);
                if (data.roleCredentials !== undefined && data.roleCredentials !== null) {
                    contents.roleCredentials = deserializeAws_restJson1RoleCredentials(data.roleCredentials, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetRoleCredentialsCommandError = function (output, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return index.__generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [index.__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = index.__assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.sso#InvalidRequestException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.sso#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "TooManyRequestsException": return [3 /*break*/, 6];
                    case "com.amazonaws.sso#TooManyRequestsException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.sso#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = index.__assign.apply(void 0, [index.__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = index.__assign.apply(void 0, [index.__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 7:
                response = index.__assign.apply(void 0, [index.__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
            case 9:
                response = index.__assign.apply(void 0, [index.__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = index.__assign(index.__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_restJson1InvalidRequestExceptionResponse = function (parsedOutput, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return index.__generator(this, function (_a) {
        contents = {
            name: "InvalidRequestException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = index.expectString(data.message);
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ResourceNotFoundExceptionResponse = function (parsedOutput, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return index.__generator(this, function (_a) {
        contents = {
            name: "ResourceNotFoundException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = index.expectString(data.message);
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1TooManyRequestsExceptionResponse = function (parsedOutput, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return index.__generator(this, function (_a) {
        contents = {
            name: "TooManyRequestsException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = index.expectString(data.message);
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1UnauthorizedExceptionResponse = function (parsedOutput, context) { return index.__awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return index.__generator(this, function (_a) {
        contents = {
            name: "UnauthorizedException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = index.expectString(data.message);
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1RoleCredentials = function (output, context) {
    return {
        accessKeyId: index.expectString(output.accessKeyId),
        expiration: index.expectLong(output.expiration),
        secretAccessKey: index.expectString(output.secretAccessKey),
        sessionToken: index.expectString(output.sessionToken),
    };
};
var deserializeMetadata = function (output) {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var isSerializableHeaderValue = function (value) {
    return value !== undefined &&
        value !== null &&
        value !== "" &&
        (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
        (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
};
var parseBody = function (streamBody, context) {
    return collectBodyString(streamBody, context).then(function (encoded) {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
var loadRestJsonErrorCode = function (output, data) {
    var findKey = function (object, key) { return Object.keys(object).find(function (k) { return k.toLowerCase() === key.toLowerCase(); }); };
    var sanitizeErrorCode = function (rawValue) {
        var cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    var headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};

/**
 * <p>Returns the STS short-term credentials for a given role name that is assigned to the
 *       user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOClient, GetRoleCredentialsCommand } from "@aws-sdk/client-sso"; // ES Modules import
 * // const { SSOClient, GetRoleCredentialsCommand } = require("@aws-sdk/client-sso"); // CommonJS import
 * const client = new SSOClient(config);
 * const command = new GetRoleCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRoleCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetRoleCredentialsCommandOutput} for command's `response` shape.
 * @see {@link SSOClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRoleCredentialsCommand = /** @class */ (function (_super) {
    index.__extends(GetRoleCredentialsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRoleCredentialsCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    GetRoleCredentialsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(index.getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOClient";
        var commandName = "GetRoleCredentialsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRoleCredentialsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRoleCredentialsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRoleCredentialsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetRoleCredentialsCommand(input, context);
    };
    GetRoleCredentialsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetRoleCredentialsCommand(output, context);
    };
    return GetRoleCredentialsCommand;
}(index.Command));

var ENV_PROFILE = "AWS_PROFILE";
var DEFAULT_PROFILE = "default";
/**
 * Load profiles from credentials and config INI files and normalize them into a
 * single profile list.
 *
 * @internal
 */
var parseKnownFiles = function (init) { return index.__awaiter(void 0, void 0, void 0, function () {
    var _a, loadedConfig, parsedFiles;
    return index.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = init.loadedConfig, loadedConfig = _a === void 0 ? loadSharedConfigFiles(init) : _a;
                return [4 /*yield*/, loadedConfig];
            case 1:
                parsedFiles = _b.sent();
                return [2 /*return*/, index.__assign(index.__assign({}, parsedFiles.configFile), parsedFiles.credentialsFile)];
        }
    });
}); };
/**
 * @internal
 */
var getMasterProfileName = function (init) {
    return init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE;
};

/**
 * The time window (15 mins) that SDK will treat the SSO token expires in before the defined expiration date in token.
 * This is needed because server side may have invalidated the token before the defined expiration date.
 *
 * @internal
 */
var EXPIRE_WINDOW_MS = 15 * 60 * 1000;
var SHOULD_FAIL_CREDENTIAL_CHAIN = false;
/**
 * Creates a credential provider that will read from a credential_process specified
 * in ini files.
 */
var fromSSO = function (init) {
    if (init === void 0) { init = {}; }
    return function () { return index.__awaiter(void 0, void 0, void 0, function () {
        var ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, profiles, profileName, profile, _a, sso_start_url, sso_account_id, sso_region, sso_role_name;
        return index.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ssoStartUrl = init.ssoStartUrl, ssoAccountId = init.ssoAccountId, ssoRegion = init.ssoRegion, ssoRoleName = init.ssoRoleName, ssoClient = init.ssoClient;
                    if (!(!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName)) return [3 /*break*/, 2];
                    return [4 /*yield*/, parseKnownFiles(init)];
                case 1:
                    profiles = _b.sent();
                    profileName = getMasterProfileName(init);
                    profile = profiles[profileName];
                    if (!isSsoProfile(profile)) {
                        throw new CredentialsProviderError("Profile " + profileName + " is not configured with SSO credentials.");
                    }
                    _a = validateSsoProfile(profile), sso_start_url = _a.sso_start_url, sso_account_id = _a.sso_account_id, sso_region = _a.sso_region, sso_role_name = _a.sso_role_name;
                    return [2 /*return*/, resolveSSOCredentials({
                            ssoStartUrl: sso_start_url,
                            ssoAccountId: sso_account_id,
                            ssoRegion: sso_region,
                            ssoRoleName: sso_role_name,
                            ssoClient: ssoClient,
                        })];
                case 2:
                    if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
                        throw new CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl",' +
                            ' "ssoAccountId", "ssoRegion", "ssoRoleName"');
                    }
                    else {
                        return [2 /*return*/, resolveSSOCredentials({ ssoStartUrl: ssoStartUrl, ssoAccountId: ssoAccountId, ssoRegion: ssoRegion, ssoRoleName: ssoRoleName, ssoClient: ssoClient })];
                    }
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
var resolveSSOCredentials = function (_a) {
    var ssoStartUrl = _a.ssoStartUrl, ssoAccountId = _a.ssoAccountId, ssoRegion = _a.ssoRegion, ssoRoleName = _a.ssoRoleName, ssoClient = _a.ssoClient;
    return index.__awaiter(void 0, void 0, void 0, function () {
        var hasher, cacheName, tokenFile, token, accessToken, sso, ssoResp, e_1, _b, _c, accessKeyId, secretAccessKey, sessionToken, expiration;
        return index.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    hasher = crypto.createHash("sha1");
                    cacheName = hasher.update(ssoStartUrl).digest("hex");
                    tokenFile = require$$1.join(getHomeDir(), ".aws", "sso", "cache", cacheName + ".json");
                    try {
                        token = JSON.parse(fs.readFileSync(tokenFile, { encoding: "utf-8" }));
                        if (new Date(token.expiresAt).getTime() - Date.now() <= EXPIRE_WINDOW_MS) {
                            throw new Error("SSO token is expired.");
                        }
                    }
                    catch (e) {
                        throw new CredentialsProviderError("The SSO session associated with this profile has expired or is otherwise invalid. To refresh this SSO session " +
                            "run aws sso login with the corresponding profile.", SHOULD_FAIL_CREDENTIAL_CHAIN);
                    }
                    accessToken = token.accessToken;
                    sso = ssoClient || new SSOClient({ region: ssoRegion });
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, sso.send(new GetRoleCredentialsCommand({
                            accountId: ssoAccountId,
                            roleName: ssoRoleName,
                            accessToken: accessToken,
                        }))];
                case 2:
                    ssoResp = _d.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _d.sent();
                    throw CredentialsProviderError.from(e_1, SHOULD_FAIL_CREDENTIAL_CHAIN);
                case 4:
                    _b = ssoResp.roleCredentials, _c = _b === void 0 ? {} : _b, accessKeyId = _c.accessKeyId, secretAccessKey = _c.secretAccessKey, sessionToken = _c.sessionToken, expiration = _c.expiration;
                    if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
                        throw new CredentialsProviderError("SSO returns an invalid temporary credential.", SHOULD_FAIL_CREDENTIAL_CHAIN);
                    }
                    return [2 /*return*/, { accessKeyId: accessKeyId, secretAccessKey: secretAccessKey, sessionToken: sessionToken, expiration: new Date(expiration) }];
            }
        });
    });
};
/**
 * @internal
 */
var validateSsoProfile = function (profile) {
    var sso_start_url = profile.sso_start_url, sso_account_id = profile.sso_account_id, sso_region = profile.sso_region, sso_role_name = profile.sso_role_name;
    if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new CredentialsProviderError("Profile is configured with invalid SSO credentials. Required parameters \"sso_account_id\", \"sso_region\", " +
            ("\"sso_role_name\", \"sso_start_url\". Got " + Object.keys(profile).join(", ") + "\nReference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html"), SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    return profile;
};
/**
 * @internal
 */
var isSsoProfile = function (arg) {
    return arg &&
        (typeof arg.sso_start_url === "string" ||
            typeof arg.sso_account_id === "string" ||
            typeof arg.sso_region === "string" ||
            typeof arg.sso_role_name === "string");
};

var fromWebToken = function (init) {
    return function () {
        var roleArn = init.roleArn, roleSessionName = init.roleSessionName, webIdentityToken = init.webIdentityToken, providerId = init.providerId, policyArns = init.policyArns, policy = init.policy, durationSeconds = init.durationSeconds, roleAssumerWithWebIdentity = init.roleAssumerWithWebIdentity;
        if (!roleAssumerWithWebIdentity) {
            throw new CredentialsProviderError("Role Arn '" + roleArn + "' needs to be assumed with web identity," +
                " but no role assumption callback was provided.", false);
        }
        return roleAssumerWithWebIdentity({
            RoleArn: roleArn,
            RoleSessionName: roleSessionName !== null && roleSessionName !== void 0 ? roleSessionName : "aws-sdk-js-session-" + Date.now(),
            WebIdentityToken: webIdentityToken,
            ProviderId: providerId,
            PolicyArns: policyArns,
            Policy: policy,
            DurationSeconds: durationSeconds,
        });
    };
};

var ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
var ENV_ROLE_ARN = "AWS_ROLE_ARN";
var ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
/**
 * Represents OIDC credentials from a file on disk.
 */
var fromTokenFile = function (init) {
    if (init === void 0) { init = {}; }
    return function () { return index.__awaiter(void 0, void 0, void 0, function () {
        return index.__generator(this, function (_a) {
            return [2 /*return*/, resolveTokenFile(init)];
        });
    }); };
};
var resolveTokenFile = function (init) {
    var _a, _b, _c;
    var webIdentityTokenFile = (_a = init === null || init === void 0 ? void 0 : init.webIdentityTokenFile) !== null && _a !== void 0 ? _a : process.env[ENV_TOKEN_FILE];
    var roleArn = (_b = init === null || init === void 0 ? void 0 : init.roleArn) !== null && _b !== void 0 ? _b : process.env[ENV_ROLE_ARN];
    var roleSessionName = (_c = init === null || init === void 0 ? void 0 : init.roleSessionName) !== null && _c !== void 0 ? _c : process.env[ENV_ROLE_SESSION_NAME];
    if (!webIdentityTokenFile || !roleArn) {
        throw new CredentialsProviderError("Web identity configuration not specified");
    }
    return fromWebToken(index.__assign(index.__assign({}, init), { webIdentityToken: fs.readFileSync(webIdentityTokenFile, { encoding: "ascii" }), roleArn: roleArn, roleSessionName: roleSessionName }))();
};

var isStaticCredsProfile = function (arg) {
    return Boolean(arg) &&
        typeof arg === "object" &&
        typeof arg.aws_access_key_id === "string" &&
        typeof arg.aws_secret_access_key === "string" &&
        ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1;
};
var isWebIdentityProfile = function (arg) {
    return Boolean(arg) &&
        typeof arg === "object" &&
        typeof arg.web_identity_token_file === "string" &&
        typeof arg.role_arn === "string" &&
        ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1;
};
var isAssumeRoleProfile = function (arg) {
    return Boolean(arg) &&
        typeof arg === "object" &&
        typeof arg.role_arn === "string" &&
        ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 &&
        ["undefined", "string"].indexOf(typeof arg.external_id) > -1 &&
        ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1;
};
var isAssumeRoleWithSourceProfile = function (arg) {
    return isAssumeRoleProfile(arg) && typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
};
var isAssumeRoleWithProviderProfile = function (arg) {
    return isAssumeRoleProfile(arg) && typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
};
/**
 * Creates a credential provider that will read from ini files and supports
 * role assumption and multi-factor authentication.
 */
var fromIni = function (init) {
    if (init === void 0) { init = {}; }
    return function () { return index.__awaiter(void 0, void 0, void 0, function () {
        var profiles;
        return index.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, parseKnownFiles(init)];
                case 1:
                    profiles = _a.sent();
                    return [2 /*return*/, resolveProfileData(getMasterProfileName(init), profiles, init)];
            }
        });
    }); };
};
var resolveProfileData = function (profileName, profiles, options, visitedProfiles) {
    if (visitedProfiles === void 0) { visitedProfiles = {}; }
    return index.__awaiter(void 0, void 0, void 0, function () {
        var data, ExternalId, mfa_serial, RoleArn, _a, RoleSessionName, source_profile, credential_source, sourceCreds, params, _b, _c, _d, _e, sso_start_url, sso_account_id, sso_region, sso_role_name;
        var _f;
        return index.__generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    data = profiles[profileName];
                    // If this is not the first profile visited, static credentials should be
                    // preferred over role assumption metadata. This special treatment of
                    // second and subsequent hops is to ensure compatibility with the AWS CLI.
                    if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
                        return [2 /*return*/, resolveStaticCredentials(data)];
                    }
                    if (!(isAssumeRoleWithSourceProfile(data) || isAssumeRoleWithProviderProfile(data))) return [3 /*break*/, 4];
                    ExternalId = data.external_id, mfa_serial = data.mfa_serial, RoleArn = data.role_arn, _a = data.role_session_name, RoleSessionName = _a === void 0 ? "aws-sdk-js-" + Date.now() : _a, source_profile = data.source_profile, credential_source = data.credential_source;
                    if (!options.roleAssumer) {
                        throw new CredentialsProviderError("Profile " + profileName + " requires a role to be assumed, but no" + " role assumption callback was provided.", false);
                    }
                    if (source_profile && source_profile in visitedProfiles) {
                        throw new CredentialsProviderError("Detected a cycle attempting to resolve credentials for profile" +
                            (" " + getMasterProfileName(options) + ". Profiles visited: ") +
                            Object.keys(visitedProfiles).join(", "), false);
                    }
                    sourceCreds = source_profile
                        ? resolveProfileData(source_profile, profiles, options, index.__assign(index.__assign({}, visitedProfiles), (_f = {}, _f[source_profile] = true, _f)))
                        : resolveCredentialSource(credential_source, profileName)();
                    params = { RoleArn: RoleArn, RoleSessionName: RoleSessionName, ExternalId: ExternalId };
                    if (!mfa_serial) return [3 /*break*/, 2];
                    if (!options.mfaCodeProvider) {
                        throw new CredentialsProviderError("Profile " + profileName + " requires multi-factor authentication," + " but no MFA code callback was provided.", false);
                    }
                    params.SerialNumber = mfa_serial;
                    _b = params;
                    return [4 /*yield*/, options.mfaCodeProvider(mfa_serial)];
                case 1:
                    _b.TokenCode = _g.sent();
                    _g.label = 2;
                case 2:
                    _d = (_c = options).roleAssumer;
                    return [4 /*yield*/, sourceCreds];
                case 3: return [2 /*return*/, _d.apply(_c, [_g.sent(), params])];
                case 4:
                    // If no role assumption metadata is present, attempt to load static
                    // credentials from the selected profile.
                    if (isStaticCredsProfile(data)) {
                        return [2 /*return*/, resolveStaticCredentials(data)];
                    }
                    // If no static credentials are present, attempt to assume role with
                    // web identity if web_identity_token_file and role_arn is available
                    if (isWebIdentityProfile(data)) {
                        return [2 /*return*/, resolveWebIdentityCredentials(data, options)];
                    }
                    if (isSsoProfile(data)) {
                        _e = validateSsoProfile(data), sso_start_url = _e.sso_start_url, sso_account_id = _e.sso_account_id, sso_region = _e.sso_region, sso_role_name = _e.sso_role_name;
                        return [2 /*return*/, fromSSO({
                                ssoStartUrl: sso_start_url,
                                ssoAccountId: sso_account_id,
                                ssoRegion: sso_region,
                                ssoRoleName: sso_role_name,
                            })()];
                    }
                    // If the profile cannot be parsed or contains neither static credentials
                    // nor role assumption metadata, throw an error. This should be considered a
                    // terminal resolution error if a profile has been specified by the user
                    // (whether via a parameter, an environment variable, or another profile's
                    // `source_profile` key).
                    throw new CredentialsProviderError("Profile " + profileName + " could not be found or parsed in shared" + " credentials file.");
            }
        });
    });
};
/**
 * Resolve the `credential_source` entry from the profile, and return the
 * credential providers respectively. No memoization is needed for the
 * credential source providers because memoization should be added outside the
 * fromIni() provider. The source credential needs to be refreshed every time
 * fromIni() is called.
 */
var resolveCredentialSource = function (credentialSource, profileName) {
    var sourceProvidersMap = {
        EcsContainer: fromContainerMetadata,
        Ec2InstanceMetadata: fromInstanceMetadata,
        Environment: fromEnv$1,
    };
    if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource]();
    }
    else {
        throw new CredentialsProviderError("Unsupported credential source in profile " + profileName + ". Got " + credentialSource + ", " +
            "expected EcsContainer or Ec2InstanceMetadata or Environment.");
    }
};
var resolveStaticCredentials = function (profile) {
    return Promise.resolve({
        accessKeyId: profile.aws_access_key_id,
        secretAccessKey: profile.aws_secret_access_key,
        sessionToken: profile.aws_session_token,
    });
};
var resolveWebIdentityCredentials = function (profile, options) { return index.__awaiter(void 0, void 0, void 0, function () {
    return index.__generator(this, function (_a) {
        return [2 /*return*/, fromTokenFile({
                webIdentityTokenFile: profile.web_identity_token_file,
                roleArn: profile.role_arn,
                roleSessionName: profile.role_session_name,
                roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
            })()];
    });
}); };

/**
 * Creates a credential provider that will read from a credential_process specified
 * in ini files.
 */
var fromProcess = function (init) {
    if (init === void 0) { init = {}; }
    return function () { return index.__awaiter(void 0, void 0, void 0, function () {
        var profiles;
        return index.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, parseKnownFiles(init)];
                case 1:
                    profiles = _a.sent();
                    return [2 /*return*/, resolveProcessCredentials(getMasterProfileName(init), profiles)];
            }
        });
    }); };
};
var resolveProcessCredentials = function (profileName, profiles) { return index.__awaiter(void 0, void 0, void 0, function () {
    var profile, credentialProcess;
    return index.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                profile = profiles[profileName];
                if (!profiles[profileName]) return [3 /*break*/, 4];
                credentialProcess = profile["credential_process"];
                if (!(credentialProcess !== undefined)) return [3 /*break*/, 2];
                return [4 /*yield*/, execPromise(credentialProcess)
                        .then(function (processResult) {
                        var data;
                        try {
                            data = JSON.parse(processResult);
                        }
                        catch (_a) {
                            throw Error("Profile " + profileName + " credential_process returned invalid JSON.");
                        }
                        var version = data.Version, accessKeyId = data.AccessKeyId, secretAccessKey = data.SecretAccessKey, sessionToken = data.SessionToken, expiration = data.Expiration;
                        if (version !== 1) {
                            throw Error("Profile " + profileName + " credential_process did not return Version 1.");
                        }
                        if (accessKeyId === undefined || secretAccessKey === undefined) {
                            throw Error("Profile " + profileName + " credential_process returned invalid credentials.");
                        }
                        var expirationUnix;
                        if (expiration) {
                            var currentTime = new Date();
                            var expireTime = new Date(expiration);
                            if (expireTime < currentTime) {
                                throw Error("Profile " + profileName + " credential_process returned expired credentials.");
                            }
                            expirationUnix = Math.floor(new Date(expiration).valueOf() / 1000);
                        }
                        return {
                            accessKeyId: accessKeyId,
                            secretAccessKey: secretAccessKey,
                            sessionToken: sessionToken,
                            expirationUnix: expirationUnix,
                        };
                    })
                        .catch(function (error) {
                        throw new CredentialsProviderError(error.message);
                    })];
            case 1: return [2 /*return*/, _a.sent()];
            case 2: throw new CredentialsProviderError("Profile " + profileName + " did not contain credential_process.");
            case 3: return [3 /*break*/, 5];
            case 4: 
            // If the profile cannot be parsed or does not contain the default or
            // specified profile throw an error. This should be considered a terminal
            // resolution error if a profile has been specified by the user (whether via
            // a parameter, anenvironment variable, or another profile's `source_profile` key).
            throw new CredentialsProviderError("Profile " + profileName + " could not be found in shared credentials file.");
            case 5: return [2 /*return*/];
        }
    });
}); };
var execPromise = function (command) {
    return new Promise(function (resolve, reject) {
        child_process.exec(command, function (error, stdout) {
            if (error) {
                reject(error);
                return;
            }
            resolve(stdout.trim());
        });
    });
};

var ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
/**
 * Creates a credential provider that will attempt to find credentials from the
 * following sources (listed in order of precedence):
 *   * Environment variables exposed via `process.env`
 *   * SSO credentials from token cache
 *   * Web identity token credentials
 *   * Shared credentials and config ini files
 *   * The EC2/ECS Instance Metadata Service
 *
 * The default credential provider will invoke one provider at a time and only
 * continue to the next if no credentials have been located. For example, if
 * the process finds values defined via the `AWS_ACCESS_KEY_ID` and
 * `AWS_SECRET_ACCESS_KEY` environment variables, the files at
 * `~/.aws/credentials` and `~/.aws/config` will not be read, nor will any
 * messages be sent to the Instance Metadata Service.
 *
 * @param init                  Configuration that is passed to each individual
 *                              provider
 *
 * @see fromEnv                 The function used to source credentials from
 *                              environment variables
 * @see fromSSO                 The function used to source credentials from
 *                              resolved SSO token cache
 * @see fromTokenFile           The function used to source credentials from
 *                              token file
 * @see fromIni                 The function used to source credentials from INI
 *                              files
 * @see fromProcess             The function used to sources credentials from
 *                              credential_process in INI files
 * @see fromInstanceMetadata    The function used to source credentials from the
 *                              EC2 Instance Metadata Service
 * @see fromContainerMetadata   The function used to source credentials from the
 *                              ECS Container Metadata Service
 */
var defaultProvider = function (init) {
    if (init === void 0) { init = {}; }
    var options = index.__assign({ profile: process.env[ENV_PROFILE] }, init);
    if (!options.loadedConfig)
        options.loadedConfig = loadSharedConfigFiles(init);
    var providers = [
        fromSSO(options),
        fromIni(options),
        fromProcess(options),
        fromTokenFile(options),
        remoteProvider(options),
        function () { return index.__awaiter(void 0, void 0, void 0, function () {
            return index.__generator(this, function (_a) {
                throw new CredentialsProviderError("Could not load credentials from any providers", false);
            });
        }); },
    ];
    if (!options.profile)
        providers.unshift(fromEnv$1());
    var providerChain = chain.apply(void 0, index.__spreadArray([], index.__read(providers)));
    return memoize(providerChain, function (credentials) { return credentials.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000; }, function (credentials) { return credentials.expiration !== undefined; });
};
var remoteProvider = function (init) {
    if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
        return fromContainerMetadata(init);
    }
    if (process.env[ENV_IMDS_DISABLED]) {
        return function () { return Promise.reject(new CredentialsProviderError("EC2 Instance Metadata Service access disabled")); };
    }
    return fromInstanceMetadata(init);
};

var regionHash$1 = {
    "aws-global": {
        hostname: "sts.amazonaws.com",
        signingRegion: "us-east-1",
    },
    "us-east-1-fips": {
        hostname: "sts-fips.us-east-1.amazonaws.com",
        signingRegion: "us-east-1",
    },
    "us-east-2-fips": {
        hostname: "sts-fips.us-east-2.amazonaws.com",
        signingRegion: "us-east-2",
    },
    "us-gov-east-1-fips": {
        hostname: "sts.us-gov-east-1.amazonaws.com",
        signingRegion: "us-gov-east-1",
    },
    "us-gov-west-1-fips": {
        hostname: "sts.us-gov-west-1.amazonaws.com",
        signingRegion: "us-gov-west-1",
    },
    "us-west-1-fips": {
        hostname: "sts-fips.us-west-1.amazonaws.com",
        signingRegion: "us-west-1",
    },
    "us-west-2-fips": {
        hostname: "sts-fips.us-west-2.amazonaws.com",
        signingRegion: "us-west-2",
    },
};
var partitionHash$1 = {
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
            "aws-global",
            "ca-central-1",
            "eu-central-1",
            "eu-north-1",
            "eu-south-1",
            "eu-west-1",
            "eu-west-2",
            "eu-west-3",
            "me-south-1",
            "sa-east-1",
            "us-east-1",
            "us-east-1-fips",
            "us-east-2",
            "us-east-2-fips",
            "us-west-1",
            "us-west-1-fips",
            "us-west-2",
            "us-west-2-fips",
        ],
        hostname: "sts.{region}.amazonaws.com",
    },
    "aws-cn": {
        regions: ["cn-north-1", "cn-northwest-1"],
        hostname: "sts.{region}.amazonaws.com.cn",
    },
    "aws-iso": {
        regions: ["us-iso-east-1"],
        hostname: "sts.{region}.c2s.ic.gov",
    },
    "aws-iso-b": {
        regions: ["us-isob-east-1"],
        hostname: "sts.{region}.sc2s.sgov.gov",
    },
    "aws-us-gov": {
        regions: ["us-gov-east-1", "us-gov-east-1-fips", "us-gov-west-1", "us-gov-west-1-fips"],
        hostname: "sts.{region}.amazonaws.com",
    },
};
var defaultRegionInfoProvider$1 = function (region, options) { return index.__awaiter(void 0, void 0, void 0, function () {
    return index.__generator(this, function (_a) {
        return [2 /*return*/, getRegionInfo(region, index.__assign(index.__assign({}, options), { signingService: "sts", regionHash: regionHash$1, partitionHash: partitionHash$1 }))];
    });
}); };

/**
 * @internal
 */
var getRuntimeConfig$3 = function (config) {
    var _a, _b, _c, _d, _e;
    return ({
        apiVersion: "2011-06-15",
        disableHostPrefix: (_a = config === null || config === void 0 ? void 0 : config.disableHostPrefix) !== null && _a !== void 0 ? _a : false,
        logger: (_b = config === null || config === void 0 ? void 0 : config.logger) !== null && _b !== void 0 ? _b : {},
        regionInfoProvider: (_c = config === null || config === void 0 ? void 0 : config.regionInfoProvider) !== null && _c !== void 0 ? _c : defaultRegionInfoProvider$1,
        serviceId: (_d = config === null || config === void 0 ? void 0 : config.serviceId) !== null && _d !== void 0 ? _d : "STS",
        urlParser: (_e = config === null || config === void 0 ? void 0 : config.urlParser) !== null && _e !== void 0 ? _e : parseUrl,
    });
};

/**
 * @internal
 */
var getRuntimeConfig$2 = function (config) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    emitWarningIfUnsupportedVersion(process.version);
    var clientSharedValues = getRuntimeConfig$3(config);
    return index.__assign(index.__assign(index.__assign({}, clientSharedValues), config), { runtime: "node", base64Decoder: (_a = config === null || config === void 0 ? void 0 : config.base64Decoder) !== null && _a !== void 0 ? _a : fromBase64, base64Encoder: (_b = config === null || config === void 0 ? void 0 : config.base64Encoder) !== null && _b !== void 0 ? _b : toBase64, bodyLengthChecker: (_c = config === null || config === void 0 ? void 0 : config.bodyLengthChecker) !== null && _c !== void 0 ? _c : calculateBodyLength, credentialDefaultProvider: (_d = config === null || config === void 0 ? void 0 : config.credentialDefaultProvider) !== null && _d !== void 0 ? _d : decorateDefaultCredentialProvider$1(defaultProvider), defaultUserAgentProvider: (_e = config === null || config === void 0 ? void 0 : config.defaultUserAgentProvider) !== null && _e !== void 0 ? _e : defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: packageInfo$1.version }), maxAttempts: (_f = config === null || config === void 0 ? void 0 : config.maxAttempts) !== null && _f !== void 0 ? _f : loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS), region: (_g = config === null || config === void 0 ? void 0 : config.region) !== null && _g !== void 0 ? _g : loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS), requestHandler: (_h = config === null || config === void 0 ? void 0 : config.requestHandler) !== null && _h !== void 0 ? _h : new NodeHttpHandler(), retryMode: (_j = config === null || config === void 0 ? void 0 : config.retryMode) !== null && _j !== void 0 ? _j : loadConfig(NODE_RETRY_MODE_CONFIG_OPTIONS), sha256: (_k = config === null || config === void 0 ? void 0 : config.sha256) !== null && _k !== void 0 ? _k : Hash.bind(null, "sha256"), streamCollector: (_l = config === null || config === void 0 ? void 0 : config.streamCollector) !== null && _l !== void 0 ? _l : streamCollector, utf8Decoder: (_m = config === null || config === void 0 ? void 0 : config.utf8Decoder) !== null && _m !== void 0 ? _m : fromUtf8, utf8Encoder: (_o = config === null || config === void 0 ? void 0 : config.utf8Encoder) !== null && _o !== void 0 ? _o : toUtf8 });
};

/**
 * Set STS client constructor to `stsClientCtor` config parameter. It is used
 * for role assumers for STS client internally. See `clients/client-sts/defaultStsRoleAssumers.ts`
 * and `clients/client-sts/STSClient.ts`.
 */
var resolveStsAuthConfig = function (input, _a) {
    var stsClientCtor = _a.stsClientCtor;
    return resolveAwsAuthConfig(index.__assign(index.__assign({}, input), { stsClientCtor: stsClientCtor }));
};

/**
 * <fullname>Security Token Service</fullname>
 *          <p>Security Token Service (STS) enables you to request temporary, limited-privilege
 *       credentials for Identity and Access Management (IAM) users or for users that you
 *       authenticate (federated users). This guide provides descriptions of the STS API. For
 *       more information about using this service, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html">Temporary Security Credentials</a>.</p>
 */
var STSClient = /** @class */ (function (_super) {
    index.__extends(STSClient, _super);
    function STSClient(configuration) {
        var _this = this;
        var _config_0 = getRuntimeConfig$2(configuration);
        var _config_1 = resolveRegionConfig(_config_0);
        var _config_2 = resolveEndpointsConfig(_config_1);
        var _config_3 = resolveRetryConfig(_config_2);
        var _config_4 = resolveHostHeaderConfig(_config_3);
        var _config_5 = resolveStsAuthConfig(_config_4, { stsClientCtor: STSClient });
        var _config_6 = resolveUserAgentConfig(_config_5);
        _this = _super.call(this, _config_6) || this;
        _this.config = _config_6;
        _this.middlewareStack.use(getRetryPlugin(_this.config));
        _this.middlewareStack.use(getContentLengthPlugin(_this.config));
        _this.middlewareStack.use(getHostHeaderPlugin(_this.config));
        _this.middlewareStack.use(getLoggerPlugin(_this.config));
        _this.middlewareStack.use(getUserAgentPlugin(_this.config));
        return _this;
    }
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    STSClient.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return STSClient;
}(index.Client));

/**
 * The default role assumer that used by credential providers when sts:AssumeRole API is needed.
 */
var getDefaultRoleAssumer = function (stsOptions) {
    if (stsOptions === void 0) { stsOptions = {}; }
    return getDefaultRoleAssumer$1(stsOptions, STSClient);
};
/**
 * The default role assumer that used by credential providers when sts:AssumeRoleWithWebIdentity API is needed.
 */
var getDefaultRoleAssumerWithWebIdentity = function (stsOptions) {
    if (stsOptions === void 0) { stsOptions = {}; }
    return getDefaultRoleAssumerWithWebIdentity$1(stsOptions, STSClient);
};
/**
 * The default credential providers depend STS client to assume role with desired API: sts:assumeRole,
 * sts:assumeRoleWithWebIdentity, etc. This function decorates the default credential provider with role assumers which
 * encapsulates the process of calling STS commands. This can only be imported by AWS client packages to avoid circular
 * dependencies.
 *
 * @internal
 */
var decorateDefaultCredentialProvider = function (provider) {
    return function (input) {
        return provider(index.__assign({ roleAssumer: getDefaultRoleAssumer(input), roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(input) }, input));
    };
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

var tslib_es6 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  __extends: __extends,
  get __assign () { return __assign; },
  __rest: __rest,
  __decorate: __decorate,
  __param: __param,
  __metadata: __metadata,
  __awaiter: __awaiter,
  __generator: __generator,
  __createBinding: __createBinding,
  __exportStar: __exportStar,
  __values: __values,
  __read: __read,
  __spread: __spread,
  __spreadArrays: __spreadArrays,
  __await: __await,
  __asyncGenerator: __asyncGenerator,
  __asyncDelegator: __asyncDelegator,
  __asyncValues: __asyncValues,
  __makeTemplateObject: __makeTemplateObject,
  __importStar: __importStar,
  __importDefault: __importDefault,
  __classPrivateFieldGet: __classPrivateFieldGet,
  __classPrivateFieldSet: __classPrivateFieldSet
});

var tslib_1 = /*@__PURE__*/imageHandler.getAugmentedNamespace(tslib_es6);

var build = imageHandler.createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crc32 = exports.crc32 = void 0;

function crc32(data) {
    return new Crc32().update(data).digest();
}
exports.crc32 = crc32;
var Crc32 = /** @class */ (function () {
    function Crc32() {
        this.checksum = 0xffffffff;
    }
    Crc32.prototype.update = function (data) {
        var e_1, _a;
        try {
            for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                var byte = data_1_1.value;
                this.checksum =
                    (this.checksum >>> 8) ^ lookupTable[(this.checksum ^ byte) & 0xff];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this;
    };
    Crc32.prototype.digest = function () {
        return (this.checksum ^ 0xffffffff) >>> 0;
    };
    return Crc32;
}());
exports.Crc32 = Crc32;
// prettier-ignore
var lookupTable = Uint32Array.from([
    0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA,
    0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3,
    0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988,
    0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91,
    0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
    0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7,
    0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC,
    0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5,
    0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172,
    0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
    0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940,
    0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59,
    0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116,
    0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F,
    0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
    0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D,
    0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A,
    0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433,
    0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818,
    0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
    0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E,
    0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457,
    0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C,
    0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65,
    0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
    0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB,
    0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0,
    0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9,
    0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086,
    0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
    0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4,
    0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD,
    0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A,
    0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683,
    0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
    0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1,
    0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE,
    0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7,
    0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC,
    0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
    0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252,
    0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B,
    0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60,
    0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79,
    0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
    0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F,
    0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04,
    0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D,
    0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A,
    0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
    0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38,
    0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21,
    0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E,
    0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777,
    0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
    0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45,
    0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2,
    0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB,
    0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0,
    0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
    0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6,
    0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF,
    0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94,
    0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D,
]);

});

/**
 * A lossless representation of a signed, 64-bit integer. Instances of this
 * class may be used in arithmetic expressions as if they were numeric
 * primitives, but the binary representation will be preserved unchanged as the
 * `bytes` property of the object. The bytes should be encoded as big-endian,
 * two's complement integers.
 */
var Int64 = /** @class */ (function () {
    function Int64(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
            throw new Error("Int64 buffers must be exactly 8 bytes");
        }
    }
    Int64.fromNumber = function (number) {
        if (number > 9223372036854775807 || number < -9223372036854775808) {
            throw new Error(number + " is too large (or, if negative, too small) to represent as an Int64");
        }
        var bytes = new Uint8Array(8);
        for (var i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
            bytes[i] = remaining;
        }
        if (number < 0) {
            negate(bytes);
        }
        return new Int64(bytes);
    };
    /**
     * Called implicitly by infix arithmetic operators.
     */
    Int64.prototype.valueOf = function () {
        var bytes = this.bytes.slice(0);
        var negative = bytes[0] & 128;
        if (negative) {
            negate(bytes);
        }
        return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
    };
    Int64.prototype.toString = function () {
        return String(this.valueOf());
    };
    return Int64;
}());
function negate(bytes) {
    for (var i = 0; i < 8; i++) {
        bytes[i] ^= 0xff;
    }
    for (var i = 7; i > -1; i--) {
        bytes[i]++;
        if (bytes[i] !== 0)
            break;
    }
}

/**
 * @internal
 */
var HeaderMarshaller = /** @class */ (function () {
    function HeaderMarshaller(toUtf8, fromUtf8) {
        this.toUtf8 = toUtf8;
        this.fromUtf8 = fromUtf8;
    }
    HeaderMarshaller.prototype.format = function (headers) {
        var e_1, _a, e_2, _b;
        var chunks = [];
        try {
            for (var _c = index.__values(Object.keys(headers)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var headerName = _d.value;
                var bytes = this.fromUtf8(headerName);
                chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var out = new Uint8Array(chunks.reduce(function (carry, bytes) { return carry + bytes.byteLength; }, 0));
        var position = 0;
        try {
            for (var chunks_1 = index.__values(chunks), chunks_1_1 = chunks_1.next(); !chunks_1_1.done; chunks_1_1 = chunks_1.next()) {
                var chunk = chunks_1_1.value;
                out.set(chunk, position);
                position += chunk.byteLength;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (chunks_1_1 && !chunks_1_1.done && (_b = chunks_1.return)) _b.call(chunks_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return out;
    };
    HeaderMarshaller.prototype.formatHeaderValue = function (header) {
        switch (header.type) {
            case "boolean":
                return Uint8Array.from([header.value ? 0 /* boolTrue */ : 1 /* boolFalse */]);
            case "byte":
                return Uint8Array.from([2 /* byte */, header.value]);
            case "short":
                var shortView = new DataView(new ArrayBuffer(3));
                shortView.setUint8(0, 3 /* short */);
                shortView.setInt16(1, header.value, false);
                return new Uint8Array(shortView.buffer);
            case "integer":
                var intView = new DataView(new ArrayBuffer(5));
                intView.setUint8(0, 4 /* integer */);
                intView.setInt32(1, header.value, false);
                return new Uint8Array(intView.buffer);
            case "long":
                var longBytes = new Uint8Array(9);
                longBytes[0] = 5 /* long */;
                longBytes.set(header.value.bytes, 1);
                return longBytes;
            case "binary":
                var binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
                binView.setUint8(0, 6 /* byteArray */);
                binView.setUint16(1, header.value.byteLength, false);
                var binBytes = new Uint8Array(binView.buffer);
                binBytes.set(header.value, 3);
                return binBytes;
            case "string":
                var utf8Bytes = this.fromUtf8(header.value);
                var strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
                strView.setUint8(0, 7 /* string */);
                strView.setUint16(1, utf8Bytes.byteLength, false);
                var strBytes = new Uint8Array(strView.buffer);
                strBytes.set(utf8Bytes, 3);
                return strBytes;
            case "timestamp":
                var tsBytes = new Uint8Array(9);
                tsBytes[0] = 8 /* timestamp */;
                tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
                return tsBytes;
            case "uuid":
                if (!UUID_PATTERN.test(header.value)) {
                    throw new Error("Invalid UUID received: " + header.value);
                }
                var uuidBytes = new Uint8Array(17);
                uuidBytes[0] = 9 /* uuid */;
                uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
                return uuidBytes;
        }
    };
    HeaderMarshaller.prototype.parse = function (headers) {
        var out = {};
        var position = 0;
        while (position < headers.byteLength) {
            var nameLength = headers.getUint8(position++);
            var name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
            position += nameLength;
            switch (headers.getUint8(position++)) {
                case 0 /* boolTrue */:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: true,
                    };
                    break;
                case 1 /* boolFalse */:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: false,
                    };
                    break;
                case 2 /* byte */:
                    out[name] = {
                        type: BYTE_TAG,
                        value: headers.getInt8(position++),
                    };
                    break;
                case 3 /* short */:
                    out[name] = {
                        type: SHORT_TAG,
                        value: headers.getInt16(position, false),
                    };
                    position += 2;
                    break;
                case 4 /* integer */:
                    out[name] = {
                        type: INT_TAG,
                        value: headers.getInt32(position, false),
                    };
                    position += 4;
                    break;
                case 5 /* long */:
                    out[name] = {
                        type: LONG_TAG,
                        value: new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)),
                    };
                    position += 8;
                    break;
                case 6 /* byteArray */:
                    var binaryLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: BINARY_TAG,
                        value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength),
                    };
                    position += binaryLength;
                    break;
                case 7 /* string */:
                    var stringLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: STRING_TAG,
                        value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength)),
                    };
                    position += stringLength;
                    break;
                case 8 /* timestamp */:
                    out[name] = {
                        type: TIMESTAMP_TAG,
                        value: new Date(new Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf()),
                    };
                    position += 8;
                    break;
                case 9 /* uuid */:
                    var uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
                    position += 16;
                    out[name] = {
                        type: UUID_TAG,
                        value: toHex(uuidBytes.subarray(0, 4)) + "-" + toHex(uuidBytes.subarray(4, 6)) + "-" + toHex(uuidBytes.subarray(6, 8)) + "-" + toHex(uuidBytes.subarray(8, 10)) + "-" + toHex(uuidBytes.subarray(10)),
                    };
                    break;
                default:
                    throw new Error("Unrecognized header type tag");
            }
        }
        return out;
    };
    return HeaderMarshaller;
}());
var HEADER_VALUE_TYPE;
(function (HEADER_VALUE_TYPE) {
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["short"] = 3] = "short";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["long"] = 5] = "long";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["string"] = 7] = "string";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
var BOOLEAN_TAG = "boolean";
var BYTE_TAG = "byte";
var SHORT_TAG = "short";
var INT_TAG = "integer";
var LONG_TAG = "long";
var BINARY_TAG = "binary";
var STRING_TAG = "string";
var TIMESTAMP_TAG = "timestamp";
var UUID_TAG = "uuid";
var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;

// All prelude components are unsigned, 32-bit integers
var PRELUDE_MEMBER_LENGTH = 4;
// The prelude consists of two components
var PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
// Checksums are always CRC32 hashes.
var CHECKSUM_LENGTH = 4;
// Messages must include a full prelude, a prelude checksum, and a message checksum
var MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
/**
 * @internal
 */
function splitMessage(_a) {
    var byteLength = _a.byteLength, byteOffset = _a.byteOffset, buffer = _a.buffer;
    if (byteLength < MINIMUM_MESSAGE_LENGTH) {
        throw new Error("Provided message too short to accommodate event stream message overhead");
    }
    var view = new DataView(buffer, byteOffset, byteLength);
    var messageLength = view.getUint32(0, false);
    if (byteLength !== messageLength) {
        throw new Error("Reported message length does not match received message length");
    }
    var headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
    var expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
    var expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
    var checksummer = new build.Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
    if (expectedPreludeChecksum !== checksummer.digest()) {
        throw new Error("The prelude checksum specified in the message (" + expectedPreludeChecksum + ") does not match the calculated CRC32 checksum (" + checksummer.digest() + ")");
    }
    checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
    if (expectedMessageChecksum !== checksummer.digest()) {
        throw new Error("The message checksum (" + checksummer.digest() + ") did not match the expected value of " + expectedMessageChecksum);
    }
    return {
        headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
        body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH)),
    };
}

/**
 * A marshaller that can convert binary-packed event stream messages into
 * JavaScript objects and back again into their binary format.
 */
var EventStreamMarshaller$2 = /** @class */ (function () {
    function EventStreamMarshaller(toUtf8, fromUtf8) {
        this.headerMarshaller = new HeaderMarshaller(toUtf8, fromUtf8);
    }
    /**
     * Convert a structured JavaScript object with tagged headers into a binary
     * event stream message.
     */
    EventStreamMarshaller.prototype.marshall = function (_a) {
        var rawHeaders = _a.headers, body = _a.body;
        var headers = this.headerMarshaller.format(rawHeaders);
        var length = headers.byteLength + body.byteLength + 16;
        var out = new Uint8Array(length);
        var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
        var checksum = new build.Crc32();
        // Format message
        view.setUint32(0, length, false);
        view.setUint32(4, headers.byteLength, false);
        view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
        out.set(headers, 12);
        out.set(body, headers.byteLength + 12);
        // Write trailing message checksum
        view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
        return out;
    };
    /**
     * Convert a binary event stream message into a JavaScript object with an
     * opaque, binary body and tagged, parsed headers.
     */
    EventStreamMarshaller.prototype.unmarshall = function (message) {
        var _a = splitMessage(message), headers = _a.headers, body = _a.body;
        return { headers: this.headerMarshaller.parse(headers), body: body };
    };
    /**
     * Convert a structured JavaScript object with tagged headers into a binary
     * event stream message header.
     */
    EventStreamMarshaller.prototype.formatHeaders = function (rawHeaders) {
        return this.headerMarshaller.format(rawHeaders);
    };
    return EventStreamMarshaller;
}());

function getChunkedStream(source) {
    var _a;
    var currentMessageTotalLength = 0;
    var currentMessagePendingLength = 0;
    var currentMessage = null;
    var messageLengthBuffer = null;
    var allocateMessage = function (size) {
        if (typeof size !== "number") {
            throw new Error("Attempted to allocate an event message where size was not a number: " + size);
        }
        currentMessageTotalLength = size;
        currentMessagePendingLength = 4;
        currentMessage = new Uint8Array(size);
        var currentMessageView = new DataView(currentMessage.buffer);
        currentMessageView.setUint32(0, size, false); //set big-endian Uint32 to 0~3 bytes
    };
    var iterator = function () {
        return index.__asyncGenerator(this, arguments, function () {
            var sourceIterator, _a, value, done, chunkLength, currentOffset, bytesRemaining, numBytesForTotal, numBytesToWrite;
            return index.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sourceIterator = source[Symbol.asyncIterator]();
                        _b.label = 1;
                    case 1:
                        return [4 /*yield*/, index.__await(sourceIterator.next())];
                    case 2:
                        _a = _b.sent(), value = _a.value, done = _a.done;
                        if (!done) return [3 /*break*/, 10];
                        if (!!currentMessageTotalLength) return [3 /*break*/, 4];
                        return [4 /*yield*/, index.__await(void 0)];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4:
                        if (!(currentMessageTotalLength === currentMessagePendingLength)) return [3 /*break*/, 7];
                        return [4 /*yield*/, index.__await(currentMessage)];
                    case 5: return [4 /*yield*/, _b.sent()];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 7: throw new Error("Truncated event message received.");
                    case 8: return [4 /*yield*/, index.__await(void 0)];
                    case 9: return [2 /*return*/, _b.sent()];
                    case 10:
                        chunkLength = value.length;
                        currentOffset = 0;
                        _b.label = 11;
                    case 11:
                        if (!(currentOffset < chunkLength)) return [3 /*break*/, 15];
                        // create new message if necessary
                        if (!currentMessage) {
                            bytesRemaining = chunkLength - currentOffset;
                            // prevent edge case where total length spans 2 chunks
                            if (!messageLengthBuffer) {
                                messageLengthBuffer = new Uint8Array(4);
                            }
                            numBytesForTotal = Math.min(4 - currentMessagePendingLength, // remaining bytes to fill the messageLengthBuffer
                            bytesRemaining // bytes left in chunk
                            );
                            messageLengthBuffer.set(
                            // @ts-ignore error TS2532: Object is possibly 'undefined' for value
                            value.slice(currentOffset, currentOffset + numBytesForTotal), currentMessagePendingLength);
                            currentMessagePendingLength += numBytesForTotal;
                            currentOffset += numBytesForTotal;
                            if (currentMessagePendingLength < 4) {
                                // not enough information to create the current message
                                return [3 /*break*/, 15];
                            }
                            allocateMessage(new DataView(messageLengthBuffer.buffer).getUint32(0, false));
                            messageLengthBuffer = null;
                        }
                        numBytesToWrite = Math.min(currentMessageTotalLength - currentMessagePendingLength, // number of bytes left to complete message
                        chunkLength - currentOffset // number of bytes left in the original chunk
                        );
                        currentMessage.set(
                        // @ts-ignore error TS2532: Object is possibly 'undefined' for value
                        value.slice(currentOffset, currentOffset + numBytesToWrite), currentMessagePendingLength);
                        currentMessagePendingLength += numBytesToWrite;
                        currentOffset += numBytesToWrite;
                        if (!(currentMessageTotalLength && currentMessageTotalLength === currentMessagePendingLength)) return [3 /*break*/, 14];
                        return [4 /*yield*/, index.__await(currentMessage)];
                    case 12: 
                    // push out the message
                    return [4 /*yield*/, _b.sent()];
                    case 13:
                        // push out the message
                        _b.sent();
                        // cleanup
                        currentMessage = null;
                        currentMessageTotalLength = 0;
                        currentMessagePendingLength = 0;
                        _b.label = 14;
                    case 14: return [3 /*break*/, 11];
                    case 15: return [3 /*break*/, 1];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    return _a = {},
        _a[Symbol.asyncIterator] = iterator,
        _a;
}

function getUnmarshalledStream(source, options) {
    var _a;
    return _a = {},
        _a[Symbol.asyncIterator] = function () {
            return index.__asyncGenerator(this, arguments, function () {
                var source_1, source_1_1, chunk, message, messageType, unmodeledError, code, exception, deserializedException, error, event, deserialized, e_1_1;
                var _a, _b;
                var e_1, _c;
                return index.__generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _d.trys.push([0, 12, 13, 18]);
                            source_1 = index.__asyncValues(source);
                            _d.label = 1;
                        case 1: return [4 /*yield*/, index.__await(source_1.next())];
                        case 2:
                            if (!(source_1_1 = _d.sent(), !source_1_1.done)) return [3 /*break*/, 11];
                            chunk = source_1_1.value;
                            message = options.eventMarshaller.unmarshall(chunk);
                            messageType = message.headers[":message-type"].value;
                            if (!(messageType === "error")) return [3 /*break*/, 3];
                            unmodeledError = new Error(message.headers[":error-message"].value || "UnknownError");
                            unmodeledError.name = message.headers[":error-code"].value;
                            throw unmodeledError;
                        case 3:
                            if (!(messageType === "exception")) return [3 /*break*/, 5];
                            code = message.headers[":exception-type"].value;
                            exception = (_a = {}, _a[code] = message, _a);
                            return [4 /*yield*/, index.__await(options.deserializer(exception))];
                        case 4:
                            deserializedException = _d.sent();
                            if (deserializedException.$unknown) {
                                error = new Error(options.toUtf8(message.body));
                                error.name = code;
                                throw error;
                            }
                            throw deserializedException[code];
                        case 5:
                            if (!(messageType === "event")) return [3 /*break*/, 9];
                            event = (_b = {},
                                _b[message.headers[":event-type"].value] = message,
                                _b);
                            return [4 /*yield*/, index.__await(options.deserializer(event))];
                        case 6:
                            deserialized = _d.sent();
                            if (deserialized.$unknown)
                                return [3 /*break*/, 10];
                            return [4 /*yield*/, index.__await(deserialized)];
                        case 7: return [4 /*yield*/, _d.sent()];
                        case 8:
                            _d.sent();
                            return [3 /*break*/, 10];
                        case 9: throw Error("Unrecognizable event type: " + message.headers[":event-type"].value);
                        case 10: return [3 /*break*/, 1];
                        case 11: return [3 /*break*/, 18];
                        case 12:
                            e_1_1 = _d.sent();
                            e_1 = { error: e_1_1 };
                            return [3 /*break*/, 18];
                        case 13:
                            _d.trys.push([13, , 16, 17]);
                            if (!(source_1_1 && !source_1_1.done && (_c = source_1.return))) return [3 /*break*/, 15];
                            return [4 /*yield*/, index.__await(_c.call(source_1))];
                        case 14:
                            _d.sent();
                            _d.label = 15;
                        case 15: return [3 /*break*/, 17];
                        case 16:
                            if (e_1) throw e_1.error;
                            return [7 /*endfinally*/];
                        case 17: return [7 /*endfinally*/];
                        case 18: return [2 /*return*/];
                    }
                });
            });
        },
        _a;
}

var EventStreamMarshaller$1 = /** @class */ (function () {
    function EventStreamMarshaller(_a) {
        var utf8Encoder = _a.utf8Encoder, utf8Decoder = _a.utf8Decoder;
        this.eventMarshaller = new EventStreamMarshaller$2(utf8Encoder, utf8Decoder);
        this.utfEncoder = utf8Encoder;
    }
    EventStreamMarshaller.prototype.deserialize = function (body, deserializer) {
        var chunkedStream = getChunkedStream(body);
        var unmarshalledStream = getUnmarshalledStream(chunkedStream, {
            eventMarshaller: this.eventMarshaller,
            deserializer: deserializer,
            toUtf8: this.utfEncoder,
        });
        return unmarshalledStream;
    };
    EventStreamMarshaller.prototype.serialize = function (input, serializer) {
        var _a;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var self = this;
        var serializedIterator = function () {
            return index.__asyncGenerator(this, arguments, function () {
                var input_1, input_1_1, chunk, payloadBuf, e_1_1;
                var e_1, _a;
                return index.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 7, 8, 13]);
                            input_1 = index.__asyncValues(input);
                            _b.label = 1;
                        case 1: return [4 /*yield*/, index.__await(input_1.next())];
                        case 2:
                            if (!(input_1_1 = _b.sent(), !input_1_1.done)) return [3 /*break*/, 6];
                            chunk = input_1_1.value;
                            payloadBuf = self.eventMarshaller.marshall(serializer(chunk));
                            return [4 /*yield*/, index.__await(payloadBuf)];
                        case 3: return [4 /*yield*/, _b.sent()];
                        case 4:
                            _b.sent();
                            _b.label = 5;
                        case 5: return [3 /*break*/, 1];
                        case 6: return [3 /*break*/, 13];
                        case 7:
                            e_1_1 = _b.sent();
                            e_1 = { error: e_1_1 };
                            return [3 /*break*/, 13];
                        case 8:
                            _b.trys.push([8, , 11, 12]);
                            if (!(input_1_1 && !input_1_1.done && (_a = input_1.return))) return [3 /*break*/, 10];
                            return [4 /*yield*/, index.__await(_a.call(input_1))];
                        case 9:
                            _b.sent();
                            _b.label = 10;
                        case 10: return [3 /*break*/, 12];
                        case 11:
                            if (e_1) throw e_1.error;
                            return [7 /*endfinally*/];
                        case 12: return [7 /*endfinally*/];
                        case 13: return [4 /*yield*/, index.__await(new Uint8Array(0))];
                        case 14: 
                        // Ending frame
                        return [4 /*yield*/, _b.sent()];
                        case 15:
                            // Ending frame
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return _a = {},
            _a[Symbol.asyncIterator] = serializedIterator,
            _a;
    };
    return EventStreamMarshaller;
}());

/**
 * Convert object stream piped in into an async iterable. This
 * daptor should be deprecated when Node stream iterator is stable.
 * Caveat: this adaptor won't have backpressure to inwards stream
 *
 * Reference: https://nodejs.org/docs/latest-v11.x/api/stream.html#stream_readable_symbol_asynciterator
 */
function readabletoIterable(readStream) {
    return index.__asyncGenerator(this, arguments, function readabletoIterable_1() {
        var streamEnded, generationEnded, records, value;
        return index.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    streamEnded = false;
                    generationEnded = false;
                    records = new Array();
                    readStream.on("error", function (err) {
                        if (!streamEnded) {
                            streamEnded = true;
                        }
                        if (err) {
                            throw err;
                        }
                    });
                    readStream.on("data", function (data) {
                        records.push(data);
                    });
                    readStream.on("end", function () {
                        streamEnded = true;
                    });
                    _a.label = 1;
                case 1:
                    if (!!generationEnded) return [3 /*break*/, 6];
                    return [4 /*yield*/, index.__await(new Promise(function (resolve) { return setTimeout(function () { return resolve(records.shift()); }, 0); }))];
                case 2:
                    value = _a.sent();
                    if (!value) return [3 /*break*/, 5];
                    return [4 /*yield*/, index.__await(value)];
                case 3: return [4 /*yield*/, _a.sent()];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    generationEnded = streamEnded && records.length === 0;
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/];
            }
        });
    });
}

var EventStreamMarshaller = /** @class */ (function () {
    function EventStreamMarshaller(_a) {
        var utf8Encoder = _a.utf8Encoder, utf8Decoder = _a.utf8Decoder;
        this.eventMarshaller = new EventStreamMarshaller$2(utf8Encoder, utf8Decoder);
        this.universalMarshaller = new EventStreamMarshaller$1({
            utf8Decoder: utf8Decoder,
            utf8Encoder: utf8Encoder,
        });
    }
    EventStreamMarshaller.prototype.deserialize = function (body, deserializer) {
        //should use stream[Symbol.asyncIterable] when the api is stable
        //reference: https://nodejs.org/docs/latest-v11.x/api/stream.html#stream_readable_symbol_asynciterator
        var bodyIterable = typeof body[Symbol.asyncIterator] === "function" ? body : readabletoIterable(body);
        return this.universalMarshaller.deserialize(bodyIterable, deserializer);
    };
    EventStreamMarshaller.prototype.serialize = function (input, serializer) {
        var serializedIterable = this.universalMarshaller.serialize(input, serializer);
        if (typeof Stream.Readable.from === "function") {
            //reference: https://nodejs.org/dist/latest-v13.x/docs/api/stream.html#stream_new_stream_readable_options
            return Stream.Readable.from(serializedIterable);
        }
        else {
            var iterator_1 = serializedIterable[Symbol.asyncIterator]();
            var serializedStream_1 = new Stream.Readable({
                autoDestroy: true,
                objectMode: true,
                read: function () {
                    return index.__awaiter(this, void 0, void 0, function () {
                        var _this = this;
                        return index.__generator(this, function (_a) {
                            iterator_1
                                .next()
                                .then(function (_a) {
                                var done = _a.done, value = _a.value;
                                if (done) {
                                    _this.push(null);
                                }
                                else {
                                    _this.push(value);
                                }
                            })
                                .catch(function (err) {
                                _this.destroy(err);
                            });
                            return [2 /*return*/];
                        });
                    });
                },
            });
            //TODO: use 'autoDestroy' when targeting Node 11
            serializedStream_1.on("error", function () {
                serializedStream_1.destroy();
            });
            serializedStream_1.on("end", function () {
                serializedStream_1.destroy();
            });
            return serializedStream_1;
        }
    };
    return EventStreamMarshaller;
}());

/** NodeJS event stream utils provider */
var eventStreamSerdeProvider = function (options) { return new EventStreamMarshaller(options); };

var HashCalculator = /** @class */ (function (_super) {
    index.__extends(HashCalculator, _super);
    function HashCalculator(hash, options) {
        var _this = _super.call(this, options) || this;
        _this.hash = hash;
        return _this;
    }
    HashCalculator.prototype._write = function (chunk, encoding, callback) {
        try {
            this.hash.update(chunk);
        }
        catch (err) {
            return callback(err);
        }
        callback();
    };
    return HashCalculator;
}(Stream.Writable));

var fileStreamHasher = function fileStreamHasher(hashCtor, fileStream) {
    return new Promise(function (resolve, reject) {
        if (!isReadStream(fileStream)) {
            reject(new Error("Unable to calculate hash for non-file streams."));
            return;
        }
        var fileStreamTee = fs.createReadStream(fileStream.path, {
            start: fileStream.start,
            end: fileStream.end,
        });
        var hash = new hashCtor();
        var hashCalculator = new HashCalculator(hash);
        fileStreamTee.pipe(hashCalculator);
        fileStreamTee.on("error", function (err) {
            // if the source errors, the destination stream needs to manually end
            hashCalculator.end();
            reject(err);
        });
        hashCalculator.on("error", reject);
        hashCalculator.on("finish", function () {
            hash.digest().then(resolve).catch(reject);
        });
    });
};
function isReadStream(stream) {
    return typeof stream.path === "string";
}

function resolveBucketEndpointConfig(input) {
    var _a = input.bucketEndpoint, bucketEndpoint = _a === void 0 ? false : _a, _b = input.forcePathStyle, forcePathStyle = _b === void 0 ? false : _b, _c = input.useAccelerateEndpoint, useAccelerateEndpoint = _c === void 0 ? false : _c, _d = input.useDualstackEndpoint, useDualstackEndpoint = _d === void 0 ? false : _d, _e = input.useArnRegion, useArnRegion = _e === void 0 ? false : _e, _f = input.disableMultiregionAccessPoints, disableMultiregionAccessPoints = _f === void 0 ? false : _f;
    return index.__assign(index.__assign({}, input), { bucketEndpoint: bucketEndpoint, forcePathStyle: forcePathStyle, useAccelerateEndpoint: useAccelerateEndpoint, useDualstackEndpoint: useDualstackEndpoint, useArnRegion: typeof useArnRegion === "function" ? useArnRegion : function () { return Promise.resolve(useArnRegion); }, disableMultiregionAccessPoints: typeof disableMultiregionAccessPoints === "function"
            ? disableMultiregionAccessPoints
            : function () { return Promise.resolve(disableMultiregionAccessPoints); } });
}
var NODE_USE_ARN_REGION_ENV_NAME = "AWS_S3_USE_ARN_REGION";
var NODE_USE_ARN_REGION_INI_NAME = "s3_use_arn_region";
/**
 * Config to load useArnRegion from environment variables and shared INI files
 *
 * @api private
 */
var NODE_USE_ARN_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: function (env) {
        if (!Object.prototype.hasOwnProperty.call(env, NODE_USE_ARN_REGION_ENV_NAME))
            return undefined;
        if (env[NODE_USE_ARN_REGION_ENV_NAME] === "true")
            return true;
        if (env[NODE_USE_ARN_REGION_ENV_NAME] === "false")
            return false;
        throw new Error("Cannot load env " + NODE_USE_ARN_REGION_ENV_NAME + ". Expected \"true\" or \"false\", got " + env[NODE_USE_ARN_REGION_ENV_NAME] + ".");
    },
    configFileSelector: function (profile) {
        if (!Object.prototype.hasOwnProperty.call(profile, NODE_USE_ARN_REGION_INI_NAME))
            return undefined;
        if (profile[NODE_USE_ARN_REGION_INI_NAME] === "true")
            return true;
        if (profile[NODE_USE_ARN_REGION_INI_NAME] === "false")
            return false;
        throw new Error("Cannot load shared config entry " + NODE_USE_ARN_REGION_INI_NAME + ". Expected \"true\" or \"false\", got " + profile[NODE_USE_ARN_REGION_INI_NAME] + ".");
    },
    default: false,
};

const regionHash = {
    "accesspoint-af-south-1": {
        hostname: "s3-accesspoint.af-south-1.amazonaws.com",
    },
    "accesspoint-ap-east-1": {
        hostname: "s3-accesspoint.ap-east-1.amazonaws.com",
    },
    "accesspoint-ap-northeast-1": {
        hostname: "s3-accesspoint.ap-northeast-1.amazonaws.com",
    },
    "accesspoint-ap-northeast-2": {
        hostname: "s3-accesspoint.ap-northeast-2.amazonaws.com",
    },
    "accesspoint-ap-northeast-3": {
        hostname: "s3-accesspoint.ap-northeast-3.amazonaws.com",
    },
    "accesspoint-ap-south-1": {
        hostname: "s3-accesspoint.ap-south-1.amazonaws.com",
    },
    "accesspoint-ap-southeast-1": {
        hostname: "s3-accesspoint.ap-southeast-1.amazonaws.com",
    },
    "accesspoint-ap-southeast-2": {
        hostname: "s3-accesspoint.ap-southeast-2.amazonaws.com",
    },
    "accesspoint-ca-central-1": {
        hostname: "s3-accesspoint.ca-central-1.amazonaws.com",
    },
    "accesspoint-cn-north-1": {
        hostname: "s3-accesspoint.cn-north-1.amazonaws.com.cn",
    },
    "accesspoint-cn-northwest-1": {
        hostname: "s3-accesspoint.cn-northwest-1.amazonaws.com.cn",
    },
    "accesspoint-eu-central-1": {
        hostname: "s3-accesspoint.eu-central-1.amazonaws.com",
    },
    "accesspoint-eu-north-1": {
        hostname: "s3-accesspoint.eu-north-1.amazonaws.com",
    },
    "accesspoint-eu-south-1": {
        hostname: "s3-accesspoint.eu-south-1.amazonaws.com",
    },
    "accesspoint-eu-west-1": {
        hostname: "s3-accesspoint.eu-west-1.amazonaws.com",
    },
    "accesspoint-eu-west-2": {
        hostname: "s3-accesspoint.eu-west-2.amazonaws.com",
    },
    "accesspoint-eu-west-3": {
        hostname: "s3-accesspoint.eu-west-3.amazonaws.com",
    },
    "accesspoint-me-south-1": {
        hostname: "s3-accesspoint.me-south-1.amazonaws.com",
    },
    "accesspoint-sa-east-1": {
        hostname: "s3-accesspoint.sa-east-1.amazonaws.com",
    },
    "accesspoint-us-east-1": {
        hostname: "s3-accesspoint.us-east-1.amazonaws.com",
    },
    "accesspoint-us-east-2": {
        hostname: "s3-accesspoint.us-east-2.amazonaws.com",
    },
    "accesspoint-us-gov-east-1": {
        hostname: "s3-accesspoint.us-gov-east-1.amazonaws.com",
    },
    "accesspoint-us-gov-west-1": {
        hostname: "s3-accesspoint.us-gov-west-1.amazonaws.com",
    },
    "accesspoint-us-west-1": {
        hostname: "s3-accesspoint.us-west-1.amazonaws.com",
    },
    "accesspoint-us-west-2": {
        hostname: "s3-accesspoint.us-west-2.amazonaws.com",
    },
    "ap-northeast-1": {
        hostname: "s3.ap-northeast-1.amazonaws.com",
    },
    "ap-southeast-1": {
        hostname: "s3.ap-southeast-1.amazonaws.com",
    },
    "ap-southeast-2": {
        hostname: "s3.ap-southeast-2.amazonaws.com",
    },
    "aws-global": {
        hostname: "s3.amazonaws.com",
        signingRegion: "us-east-1",
    },
    "eu-west-1": {
        hostname: "s3.eu-west-1.amazonaws.com",
    },
    "fips-accesspoint-ca-central-1": {
        hostname: "s3-accesspoint-fips.ca-central-1.amazonaws.com",
    },
    "fips-accesspoint-us-east-1": {
        hostname: "s3-accesspoint-fips.us-east-1.amazonaws.com",
    },
    "fips-accesspoint-us-east-2": {
        hostname: "s3-accesspoint-fips.us-east-2.amazonaws.com",
    },
    "fips-accesspoint-us-gov-east-1": {
        hostname: "s3-accesspoint-fips.us-gov-east-1.amazonaws.com",
    },
    "fips-accesspoint-us-gov-west-1": {
        hostname: "s3-accesspoint-fips.us-gov-west-1.amazonaws.com",
    },
    "fips-accesspoint-us-west-1": {
        hostname: "s3-accesspoint-fips.us-west-1.amazonaws.com",
    },
    "fips-accesspoint-us-west-2": {
        hostname: "s3-accesspoint-fips.us-west-2.amazonaws.com",
    },
    "fips-us-gov-west-1": {
        hostname: "s3-fips.us-gov-west-1.amazonaws.com",
        signingRegion: "us-gov-west-1",
    },
    "s3-external-1": {
        hostname: "s3-external-1.amazonaws.com",
        signingRegion: "us-east-1",
    },
    "sa-east-1": {
        hostname: "s3.sa-east-1.amazonaws.com",
    },
    "us-east-1": {
        hostname: "s3.us-east-1.amazonaws.com",
    },
    "us-gov-east-1": {
        hostname: "s3.us-gov-east-1.amazonaws.com",
    },
    "us-gov-west-1": {
        hostname: "s3.us-gov-west-1.amazonaws.com",
    },
    "us-west-1": {
        hostname: "s3.us-west-1.amazonaws.com",
    },
    "us-west-2": {
        hostname: "s3.us-west-2.amazonaws.com",
    },
};
const partitionHash = {
    aws: {
        regions: [
            "accesspoint-af-south-1",
            "accesspoint-ap-east-1",
            "accesspoint-ap-northeast-1",
            "accesspoint-ap-northeast-2",
            "accesspoint-ap-northeast-3",
            "accesspoint-ap-south-1",
            "accesspoint-ap-southeast-1",
            "accesspoint-ap-southeast-2",
            "accesspoint-ca-central-1",
            "accesspoint-eu-central-1",
            "accesspoint-eu-north-1",
            "accesspoint-eu-south-1",
            "accesspoint-eu-west-1",
            "accesspoint-eu-west-2",
            "accesspoint-eu-west-3",
            "accesspoint-me-south-1",
            "accesspoint-sa-east-1",
            "accesspoint-us-east-1",
            "accesspoint-us-east-2",
            "accesspoint-us-west-1",
            "accesspoint-us-west-2",
            "af-south-1",
            "ap-east-1",
            "ap-northeast-1",
            "ap-northeast-2",
            "ap-northeast-3",
            "ap-south-1",
            "ap-southeast-1",
            "ap-southeast-2",
            "aws-global",
            "ca-central-1",
            "eu-central-1",
            "eu-north-1",
            "eu-south-1",
            "eu-west-1",
            "eu-west-2",
            "eu-west-3",
            "fips-accesspoint-ca-central-1",
            "fips-accesspoint-us-east-1",
            "fips-accesspoint-us-east-2",
            "fips-accesspoint-us-west-1",
            "fips-accesspoint-us-west-2",
            "me-south-1",
            "s3-external-1",
            "sa-east-1",
            "us-east-1",
            "us-east-2",
            "us-west-1",
            "us-west-2",
        ],
        hostname: "s3.{region}.amazonaws.com",
    },
    "aws-cn": {
        regions: ["accesspoint-cn-north-1", "accesspoint-cn-northwest-1", "cn-north-1", "cn-northwest-1"],
        hostname: "s3.{region}.amazonaws.com.cn",
    },
    "aws-iso": {
        regions: ["us-iso-east-1"],
        hostname: "s3.{region}.c2s.ic.gov",
    },
    "aws-iso-b": {
        regions: ["us-isob-east-1"],
        hostname: "s3.{region}.sc2s.sgov.gov",
    },
    "aws-us-gov": {
        regions: [
            "accesspoint-us-gov-east-1",
            "accesspoint-us-gov-west-1",
            "fips-accesspoint-us-gov-east-1",
            "fips-accesspoint-us-gov-west-1",
            "fips-us-gov-west-1",
            "us-gov-east-1",
            "us-gov-west-1",
        ],
        hostname: "s3.{region}.amazonaws.com",
    },
};
const defaultRegionInfoProvider = async (region, options) => getRegionInfo(region, {
    ...options,
    signingService: "s3",
    regionHash,
    partitionHash,
});

/**
 * @internal
 */
function validateBucketNameMiddleware() {
    var _this = this;
    return function (next) {
        return function (args) { return index.__awaiter(_this, void 0, void 0, function () {
            var Bucket, err;
            return index.__generator(this, function (_a) {
                Bucket = args.input.Bucket;
                if (typeof Bucket === "string" && !index.validate(Bucket) && Bucket.indexOf("/") >= 0) {
                    err = new Error("Bucket name shouldn't contain '/', received '" + Bucket + "'");
                    err.name = "InvalidBucketName";
                    throw err;
                }
                return [2 /*return*/, next(index.__assign({}, args))];
            });
        }); };
    };
}
/**
 * @internal
 */
var validateBucketNameMiddlewareOptions = {
    step: "initialize",
    tags: ["VALIDATE_BUCKET_NAME"],
    name: "validateBucketNameMiddleware",
    override: true,
};
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var getValidateBucketNamePlugin = function (unused) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(validateBucketNameMiddleware(), validateBucketNameMiddlewareOptions);
    },
}); };

/**
 * @internal
 */
var useRegionalEndpointMiddleware = function (config) {
    return function (next) {
        return function (args) { return index.__awaiter(void 0, void 0, void 0, function () {
            var request, _a;
            return index.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        request = args.request;
                        if (!index.HttpRequest.isInstance(request) || config.isCustomEndpoint)
                            return [2 /*return*/, next(index.__assign({}, args))];
                        if (!(request.hostname === "s3.amazonaws.com")) return [3 /*break*/, 1];
                        request.hostname = "s3.us-east-1.amazonaws.com";
                        return [3 /*break*/, 3];
                    case 1:
                        _a = "aws-global";
                        return [4 /*yield*/, config.region()];
                    case 2:
                        if (_a === (_b.sent())) {
                            request.hostname = "s3.amazonaws.com";
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/, next(index.__assign({}, args))];
                }
            });
        }); };
    };
};
/**
 * @internal
 */
var useRegionalEndpointMiddlewareOptions = {
    step: "build",
    tags: ["USE_REGIONAL_ENDPOINT", "S3"],
    name: "useRegionalEndpointMiddleware",
    override: true,
};
/**
 * @internal
 */
var getUseRegionalEndpointPlugin = function (config) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(useRegionalEndpointMiddleware(config), useRegionalEndpointMiddlewareOptions);
    },
}); };

/**
 * A SigV4-compatible signer for S3 service. In order to support SigV4a algorithm according to the operation input
 * dynamically, the signer wraps native module SigV4a signer and JS SigV4 signer. It signs the request with SigV4a
 * algorithm if the request needs to be signed with `*` region. Otherwise, it signs the request with normal SigV4
 * signer.
 * Note that SigV4a signer is only supported in Node.js now because it depends on a native dependency.
 * @private
 */
var S3SignatureV4 = /** @class */ (function () {
    function S3SignatureV4(options) {
        this.sigv4Signer = new SignatureV4(options);
        this.signerOptions = options;
    }
    S3SignatureV4.prototype.sign = function (requestToSign, options) {
        if (options === void 0) { options = {}; }
        return index.__awaiter(this, void 0, void 0, function () {
            return index.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(options.signingRegion === "*")) return [3 /*break*/, 2];
                        if (this.signerOptions.runtime !== "node")
                            throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
                        return [4 /*yield*/, this.getSigv4aSigner()];
                    case 1: return [2 /*return*/, (_a.sent()).sign(requestToSign, options)];
                    case 2: return [2 /*return*/, this.sigv4Signer.sign(requestToSign, options)];
                }
            });
        });
    };
    S3SignatureV4.prototype.presign = function (originalRequest, options) {
        if (options === void 0) { options = {}; }
        return index.__awaiter(this, void 0, void 0, function () {
            return index.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(options.signingRegion === "*")) return [3 /*break*/, 2];
                        if (this.signerOptions.runtime !== "node")
                            throw new Error("This request requires signing with SigV4Asymmetric algorithm. It's only available in Node.js");
                        return [4 /*yield*/, this.getSigv4aSigner()];
                    case 1: return [2 /*return*/, (_a.sent()).presign(originalRequest, options)];
                    case 2: return [2 /*return*/, this.sigv4Signer.presign(originalRequest, options)];
                }
            });
        });
    };
    S3SignatureV4.prototype.getSigv4aSigner = function () {
        return index.__awaiter(this, void 0, void 0, function () {
            var CrtSignerV4_1, e_1;
            return index.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.sigv4aSigner) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@aws-sdk/signature-v4-crt')); })];
                    case 2:
                        CrtSignerV4_1 = (_a.sent()).CrtSignerV4;
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        e_1.message =
                            e_1.message + "\nPlease check if you have installed \"@aws-sdk/signature-v4-crt\" package explicitly. \n" +
                                "For more information please go to https://github.com/aws/aws-sdk-js-v3#known-issues";
                        throw e_1;
                    case 4:
                        this.sigv4aSigner = new CrtSignerV4_1(index.__assign(index.__assign({}, this.signerOptions), { signingAlgorithm: 1 }));
                        _a.label = 5;
                    case 5: return [2 /*return*/, this.sigv4aSigner];
                }
            });
        });
    };
    return S3SignatureV4;
}());

/**
 * @internal
 */
const getRuntimeConfig$1 = (config) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return ({
        apiVersion: "2006-03-01",
        disableHostPrefix: (_a = config === null || config === void 0 ? void 0 : config.disableHostPrefix) !== null && _a !== void 0 ? _a : false,
        logger: (_b = config === null || config === void 0 ? void 0 : config.logger) !== null && _b !== void 0 ? _b : {},
        regionInfoProvider: (_c = config === null || config === void 0 ? void 0 : config.regionInfoProvider) !== null && _c !== void 0 ? _c : defaultRegionInfoProvider,
        serviceId: (_d = config === null || config === void 0 ? void 0 : config.serviceId) !== null && _d !== void 0 ? _d : "S3",
        signerConstructor: (_e = config === null || config === void 0 ? void 0 : config.signerConstructor) !== null && _e !== void 0 ? _e : S3SignatureV4,
        signingEscapePath: (_f = config === null || config === void 0 ? void 0 : config.signingEscapePath) !== null && _f !== void 0 ? _f : false,
        urlParser: (_g = config === null || config === void 0 ? void 0 : config.urlParser) !== null && _g !== void 0 ? _g : parseUrl,
        useArnRegion: (_h = config === null || config === void 0 ? void 0 : config.useArnRegion) !== null && _h !== void 0 ? _h : false,
    });
};

/**
 * @internal
 */
const getRuntimeConfig = (config) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    emitWarningIfUnsupportedVersion(process.version);
    const clientSharedValues = getRuntimeConfig$1(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        base64Decoder: (_a = config === null || config === void 0 ? void 0 : config.base64Decoder) !== null && _a !== void 0 ? _a : fromBase64,
        base64Encoder: (_b = config === null || config === void 0 ? void 0 : config.base64Encoder) !== null && _b !== void 0 ? _b : toBase64,
        bodyLengthChecker: (_c = config === null || config === void 0 ? void 0 : config.bodyLengthChecker) !== null && _c !== void 0 ? _c : calculateBodyLength,
        credentialDefaultProvider: (_d = config === null || config === void 0 ? void 0 : config.credentialDefaultProvider) !== null && _d !== void 0 ? _d : decorateDefaultCredentialProvider(defaultProvider),
        defaultUserAgentProvider: (_e = config === null || config === void 0 ? void 0 : config.defaultUserAgentProvider) !== null && _e !== void 0 ? _e : defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: packageInfo$2.version }),
        eventStreamSerdeProvider: (_f = config === null || config === void 0 ? void 0 : config.eventStreamSerdeProvider) !== null && _f !== void 0 ? _f : eventStreamSerdeProvider,
        maxAttempts: (_g = config === null || config === void 0 ? void 0 : config.maxAttempts) !== null && _g !== void 0 ? _g : loadConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        md5: (_h = config === null || config === void 0 ? void 0 : config.md5) !== null && _h !== void 0 ? _h : Hash.bind(null, "md5"),
        region: (_j = config === null || config === void 0 ? void 0 : config.region) !== null && _j !== void 0 ? _j : loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: (_k = config === null || config === void 0 ? void 0 : config.requestHandler) !== null && _k !== void 0 ? _k : new NodeHttpHandler(),
        retryMode: (_l = config === null || config === void 0 ? void 0 : config.retryMode) !== null && _l !== void 0 ? _l : loadConfig(NODE_RETRY_MODE_CONFIG_OPTIONS),
        sha256: (_m = config === null || config === void 0 ? void 0 : config.sha256) !== null && _m !== void 0 ? _m : Hash.bind(null, "sha256"),
        streamCollector: (_o = config === null || config === void 0 ? void 0 : config.streamCollector) !== null && _o !== void 0 ? _o : streamCollector,
        streamHasher: (_p = config === null || config === void 0 ? void 0 : config.streamHasher) !== null && _p !== void 0 ? _p : fileStreamHasher,
        useArnRegion: (_q = config === null || config === void 0 ? void 0 : config.useArnRegion) !== null && _q !== void 0 ? _q : loadConfig(NODE_USE_ARN_REGION_CONFIG_OPTIONS),
        utf8Decoder: (_r = config === null || config === void 0 ? void 0 : config.utf8Decoder) !== null && _r !== void 0 ? _r : fromUtf8,
        utf8Encoder: (_s = config === null || config === void 0 ? void 0 : config.utf8Encoder) !== null && _s !== void 0 ? _s : toUtf8,
    };
};

var resolveEventStreamSerdeConfig = function (input) { return (index.__assign(index.__assign({}, input), { eventStreamMarshaller: input.eventStreamSerdeProvider(input) })); };

function addExpectContinueMiddleware(options) {
    var _this = this;
    return function (next) {
        return function (args) { return index.__awaiter(_this, void 0, void 0, function () {
            var request;
            return index.__generator(this, function (_a) {
                request = args.request;
                if (index.HttpRequest.isInstance(request) && request.body && options.runtime === "node") {
                    request.headers = index.__assign(index.__assign({}, request.headers), { Expect: "100-continue" });
                }
                return [2 /*return*/, next(index.__assign(index.__assign({}, args), { request: request }))];
            });
        }); };
    };
}
var addExpectContinueMiddlewareOptions = {
    step: "build",
    tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"],
    name: "addExpectContinueMiddleware",
    override: true,
};
var getAddExpectContinuePlugin = function (options) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(addExpectContinueMiddleware(options), addExpectContinueMiddlewareOptions);
    },
}); };

/**
 * <p></p>
 */
class S3Client extends index.Client {
    constructor(configuration) {
        let _config_0 = getRuntimeConfig(configuration);
        let _config_1 = resolveRegionConfig(_config_0);
        let _config_2 = resolveEndpointsConfig(_config_1);
        let _config_3 = resolveRetryConfig(_config_2);
        let _config_4 = resolveHostHeaderConfig(_config_3);
        let _config_5 = resolveAwsAuthConfig(_config_4);
        let _config_6 = resolveBucketEndpointConfig(_config_5);
        let _config_7 = resolveUserAgentConfig(_config_6);
        let _config_8 = resolveEventStreamSerdeConfig(_config_7);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getAwsAuthPlugin(this.config));
        this.middlewareStack.use(getValidateBucketNamePlugin(this.config));
        this.middlewareStack.use(getUseRegionalEndpointPlugin(this.config));
        this.middlewareStack.use(getAddExpectContinuePlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
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

exports.S3Client = S3Client;
