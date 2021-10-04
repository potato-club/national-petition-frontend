'use strict';

var serdePlugin = require('./serdePlugin-1937a35b.js');
var index = require('./index-b679adc8.js');
require('./default-handler-7431a686.js');
require('./prerender-manifest.json');
require('./manifest.json');
require('./routes-manifest.json');
require('stream');
require('zlib');
require('http');
require('perf_hooks');
require('crypto');

var AddPermissionRequest;
(function (AddPermissionRequest) {
    /**
     * @internal
     */
    AddPermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddPermissionRequest || (AddPermissionRequest = {}));
var OverLimit;
(function (OverLimit) {
    /**
     * @internal
     */
    OverLimit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OverLimit || (OverLimit = {}));
var ChangeMessageVisibilityRequest;
(function (ChangeMessageVisibilityRequest) {
    /**
     * @internal
     */
    ChangeMessageVisibilityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeMessageVisibilityRequest || (ChangeMessageVisibilityRequest = {}));
var MessageNotInflight;
(function (MessageNotInflight) {
    /**
     * @internal
     */
    MessageNotInflight.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MessageNotInflight || (MessageNotInflight = {}));
var ReceiptHandleIsInvalid;
(function (ReceiptHandleIsInvalid) {
    /**
     * @internal
     */
    ReceiptHandleIsInvalid.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReceiptHandleIsInvalid || (ReceiptHandleIsInvalid = {}));
var BatchEntryIdsNotDistinct;
(function (BatchEntryIdsNotDistinct) {
    /**
     * @internal
     */
    BatchEntryIdsNotDistinct.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchEntryIdsNotDistinct || (BatchEntryIdsNotDistinct = {}));
var ChangeMessageVisibilityBatchRequestEntry;
(function (ChangeMessageVisibilityBatchRequestEntry) {
    /**
     * @internal
     */
    ChangeMessageVisibilityBatchRequestEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeMessageVisibilityBatchRequestEntry || (ChangeMessageVisibilityBatchRequestEntry = {}));
var ChangeMessageVisibilityBatchRequest;
(function (ChangeMessageVisibilityBatchRequest) {
    /**
     * @internal
     */
    ChangeMessageVisibilityBatchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeMessageVisibilityBatchRequest || (ChangeMessageVisibilityBatchRequest = {}));
var BatchResultErrorEntry;
(function (BatchResultErrorEntry) {
    /**
     * @internal
     */
    BatchResultErrorEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchResultErrorEntry || (BatchResultErrorEntry = {}));
var ChangeMessageVisibilityBatchResultEntry;
(function (ChangeMessageVisibilityBatchResultEntry) {
    /**
     * @internal
     */
    ChangeMessageVisibilityBatchResultEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeMessageVisibilityBatchResultEntry || (ChangeMessageVisibilityBatchResultEntry = {}));
var ChangeMessageVisibilityBatchResult;
(function (ChangeMessageVisibilityBatchResult) {
    /**
     * @internal
     */
    ChangeMessageVisibilityBatchResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeMessageVisibilityBatchResult || (ChangeMessageVisibilityBatchResult = {}));
var EmptyBatchRequest;
(function (EmptyBatchRequest) {
    /**
     * @internal
     */
    EmptyBatchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EmptyBatchRequest || (EmptyBatchRequest = {}));
var InvalidBatchEntryId;
(function (InvalidBatchEntryId) {
    /**
     * @internal
     */
    InvalidBatchEntryId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidBatchEntryId || (InvalidBatchEntryId = {}));
var TooManyEntriesInBatchRequest;
(function (TooManyEntriesInBatchRequest) {
    /**
     * @internal
     */
    TooManyEntriesInBatchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyEntriesInBatchRequest || (TooManyEntriesInBatchRequest = {}));
var CreateQueueRequest;
(function (CreateQueueRequest) {
    /**
     * @internal
     */
    CreateQueueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateQueueRequest || (CreateQueueRequest = {}));
var CreateQueueResult;
(function (CreateQueueResult) {
    /**
     * @internal
     */
    CreateQueueResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateQueueResult || (CreateQueueResult = {}));
var QueueDeletedRecently;
(function (QueueDeletedRecently) {
    /**
     * @internal
     */
    QueueDeletedRecently.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueueDeletedRecently || (QueueDeletedRecently = {}));
var QueueNameExists;
(function (QueueNameExists) {
    /**
     * @internal
     */
    QueueNameExists.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueueNameExists || (QueueNameExists = {}));
var DeleteMessageRequest;
(function (DeleteMessageRequest) {
    /**
     * @internal
     */
    DeleteMessageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMessageRequest || (DeleteMessageRequest = {}));
var InvalidIdFormat;
(function (InvalidIdFormat) {
    /**
     * @internal
     */
    InvalidIdFormat.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidIdFormat || (InvalidIdFormat = {}));
var DeleteMessageBatchRequestEntry;
(function (DeleteMessageBatchRequestEntry) {
    /**
     * @internal
     */
    DeleteMessageBatchRequestEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMessageBatchRequestEntry || (DeleteMessageBatchRequestEntry = {}));
var DeleteMessageBatchRequest;
(function (DeleteMessageBatchRequest) {
    /**
     * @internal
     */
    DeleteMessageBatchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMessageBatchRequest || (DeleteMessageBatchRequest = {}));
var DeleteMessageBatchResultEntry;
(function (DeleteMessageBatchResultEntry) {
    /**
     * @internal
     */
    DeleteMessageBatchResultEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMessageBatchResultEntry || (DeleteMessageBatchResultEntry = {}));
var DeleteMessageBatchResult;
(function (DeleteMessageBatchResult) {
    /**
     * @internal
     */
    DeleteMessageBatchResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMessageBatchResult || (DeleteMessageBatchResult = {}));
var DeleteQueueRequest;
(function (DeleteQueueRequest) {
    /**
     * @internal
     */
    DeleteQueueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteQueueRequest || (DeleteQueueRequest = {}));
var GetQueueAttributesRequest;
(function (GetQueueAttributesRequest) {
    /**
     * @internal
     */
    GetQueueAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetQueueAttributesRequest || (GetQueueAttributesRequest = {}));
var GetQueueAttributesResult;
(function (GetQueueAttributesResult) {
    /**
     * @internal
     */
    GetQueueAttributesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetQueueAttributesResult || (GetQueueAttributesResult = {}));
var InvalidAttributeName;
(function (InvalidAttributeName) {
    /**
     * @internal
     */
    InvalidAttributeName.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidAttributeName || (InvalidAttributeName = {}));
var GetQueueUrlRequest;
(function (GetQueueUrlRequest) {
    /**
     * @internal
     */
    GetQueueUrlRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetQueueUrlRequest || (GetQueueUrlRequest = {}));
var GetQueueUrlResult;
(function (GetQueueUrlResult) {
    /**
     * @internal
     */
    GetQueueUrlResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetQueueUrlResult || (GetQueueUrlResult = {}));
var QueueDoesNotExist;
(function (QueueDoesNotExist) {
    /**
     * @internal
     */
    QueueDoesNotExist.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueueDoesNotExist || (QueueDoesNotExist = {}));
var ListDeadLetterSourceQueuesRequest;
(function (ListDeadLetterSourceQueuesRequest) {
    /**
     * @internal
     */
    ListDeadLetterSourceQueuesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeadLetterSourceQueuesRequest || (ListDeadLetterSourceQueuesRequest = {}));
var ListDeadLetterSourceQueuesResult;
(function (ListDeadLetterSourceQueuesResult) {
    /**
     * @internal
     */
    ListDeadLetterSourceQueuesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDeadLetterSourceQueuesResult || (ListDeadLetterSourceQueuesResult = {}));
var ListQueuesRequest;
(function (ListQueuesRequest) {
    /**
     * @internal
     */
    ListQueuesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQueuesRequest || (ListQueuesRequest = {}));
var ListQueuesResult;
(function (ListQueuesResult) {
    /**
     * @internal
     */
    ListQueuesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQueuesResult || (ListQueuesResult = {}));
var ListQueueTagsRequest;
(function (ListQueueTagsRequest) {
    /**
     * @internal
     */
    ListQueueTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQueueTagsRequest || (ListQueueTagsRequest = {}));
var ListQueueTagsResult;
(function (ListQueueTagsResult) {
    /**
     * @internal
     */
    ListQueueTagsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListQueueTagsResult || (ListQueueTagsResult = {}));
var PurgeQueueInProgress;
(function (PurgeQueueInProgress) {
    /**
     * @internal
     */
    PurgeQueueInProgress.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurgeQueueInProgress || (PurgeQueueInProgress = {}));
var PurgeQueueRequest;
(function (PurgeQueueRequest) {
    /**
     * @internal
     */
    PurgeQueueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PurgeQueueRequest || (PurgeQueueRequest = {}));
var ReceiveMessageRequest;
(function (ReceiveMessageRequest) {
    /**
     * @internal
     */
    ReceiveMessageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReceiveMessageRequest || (ReceiveMessageRequest = {}));
var MessageAttributeValue;
(function (MessageAttributeValue) {
    /**
     * @internal
     */
    MessageAttributeValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MessageAttributeValue || (MessageAttributeValue = {}));
var Message;
(function (Message) {
    /**
     * @internal
     */
    Message.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Message || (Message = {}));
var ReceiveMessageResult;
(function (ReceiveMessageResult) {
    /**
     * @internal
     */
    ReceiveMessageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReceiveMessageResult || (ReceiveMessageResult = {}));
var RemovePermissionRequest;
(function (RemovePermissionRequest) {
    /**
     * @internal
     */
    RemovePermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemovePermissionRequest || (RemovePermissionRequest = {}));
var InvalidMessageContents;
(function (InvalidMessageContents) {
    /**
     * @internal
     */
    InvalidMessageContents.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidMessageContents || (InvalidMessageContents = {}));
var MessageSystemAttributeValue;
(function (MessageSystemAttributeValue) {
    /**
     * @internal
     */
    MessageSystemAttributeValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MessageSystemAttributeValue || (MessageSystemAttributeValue = {}));
var SendMessageRequest;
(function (SendMessageRequest) {
    /**
     * @internal
     */
    SendMessageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendMessageRequest || (SendMessageRequest = {}));
var SendMessageResult;
(function (SendMessageResult) {
    /**
     * @internal
     */
    SendMessageResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendMessageResult || (SendMessageResult = {}));
var UnsupportedOperation;
(function (UnsupportedOperation) {
    /**
     * @internal
     */
    UnsupportedOperation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedOperation || (UnsupportedOperation = {}));
var BatchRequestTooLong;
(function (BatchRequestTooLong) {
    /**
     * @internal
     */
    BatchRequestTooLong.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchRequestTooLong || (BatchRequestTooLong = {}));
var SendMessageBatchRequestEntry;
(function (SendMessageBatchRequestEntry) {
    /**
     * @internal
     */
    SendMessageBatchRequestEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendMessageBatchRequestEntry || (SendMessageBatchRequestEntry = {}));
var SendMessageBatchRequest;
(function (SendMessageBatchRequest) {
    /**
     * @internal
     */
    SendMessageBatchRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendMessageBatchRequest || (SendMessageBatchRequest = {}));
var SendMessageBatchResultEntry;
(function (SendMessageBatchResultEntry) {
    /**
     * @internal
     */
    SendMessageBatchResultEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendMessageBatchResultEntry || (SendMessageBatchResultEntry = {}));
var SendMessageBatchResult;
(function (SendMessageBatchResult) {
    /**
     * @internal
     */
    SendMessageBatchResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SendMessageBatchResult || (SendMessageBatchResult = {}));
var SetQueueAttributesRequest;
(function (SetQueueAttributesRequest) {
    /**
     * @internal
     */
    SetQueueAttributesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetQueueAttributesRequest || (SetQueueAttributesRequest = {}));
var TagQueueRequest;
(function (TagQueueRequest) {
    /**
     * @internal
     */
    TagQueueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagQueueRequest || (TagQueueRequest = {}));
var UntagQueueRequest;
(function (UntagQueueRequest) {
    /**
     * @internal
     */
    UntagQueueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagQueueRequest || (UntagQueueRequest = {}));

const serializeAws_querySendMessageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySendMessageRequest(input, context),
        Action: "SendMessage",
        Version: "2012-11-05",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const deserializeAws_querySendMessageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySendMessageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySendMessageResult(data.SendMessageResult);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
const deserializeAws_querySendMessageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidMessageContents":
        case "com.amazonaws.sqs#InvalidMessageContents":
            response = {
                ...(await deserializeAws_queryInvalidMessageContentsResponse(parsedOutput)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperation":
        case "com.amazonaws.sqs#UnsupportedOperation":
            response = {
                ...(await deserializeAws_queryUnsupportedOperationResponse(parsedOutput)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryInvalidMessageContentsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidMessageContents(body.Error);
    const contents = {
        name: "InvalidMessageContents",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryUnsupportedOperationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUnsupportedOperation(body.Error);
    const contents = {
        name: "UnsupportedOperation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_queryBinaryList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`BinaryListValue.${counter}`] = context.base64Encoder(entry);
        counter++;
    }
    return entries;
};
const serializeAws_queryMessageAttributeValue = (input, context) => {
    const entries = {};
    if (input.StringValue !== undefined && input.StringValue !== null) {
        entries["StringValue"] = input.StringValue;
    }
    if (input.BinaryValue !== undefined && input.BinaryValue !== null) {
        entries["BinaryValue"] = context.base64Encoder(input.BinaryValue);
    }
    if (input.StringListValues !== undefined && input.StringListValues !== null) {
        const memberEntries = serializeAws_queryStringList(input.StringListValues);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `StringListValue.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = value;
        });
    }
    if (input.BinaryListValues !== undefined && input.BinaryListValues !== null) {
        const memberEntries = serializeAws_queryBinaryList(input.BinaryListValues, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `BinaryListValue.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = value;
        });
    }
    if (input.DataType !== undefined && input.DataType !== null) {
        entries["DataType"] = input.DataType;
    }
    return entries;
};
const serializeAws_queryMessageBodyAttributeMap = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input)
        .filter((key) => input[key] != null)
        .forEach((key) => {
        entries[`entry.${counter}.Name`] = key;
        const memberEntries = serializeAws_queryMessageAttributeValue(input[key], context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`entry.${counter}.Value.${key}`] = value;
        });
        counter++;
    });
    return entries;
};
const serializeAws_queryMessageBodySystemAttributeMap = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input)
        .filter((key) => input[key] != null)
        .forEach((key) => {
        entries[`entry.${counter}.Name`] = key;
        const memberEntries = serializeAws_queryMessageSystemAttributeValue(input[key], context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`entry.${counter}.Value.${key}`] = value;
        });
        counter++;
    });
    return entries;
};
const serializeAws_queryMessageSystemAttributeValue = (input, context) => {
    const entries = {};
    if (input.StringValue !== undefined && input.StringValue !== null) {
        entries["StringValue"] = input.StringValue;
    }
    if (input.BinaryValue !== undefined && input.BinaryValue !== null) {
        entries["BinaryValue"] = context.base64Encoder(input.BinaryValue);
    }
    if (input.StringListValues !== undefined && input.StringListValues !== null) {
        const memberEntries = serializeAws_queryStringList(input.StringListValues);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `StringListValue.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = value;
        });
    }
    if (input.BinaryListValues !== undefined && input.BinaryListValues !== null) {
        const memberEntries = serializeAws_queryBinaryList(input.BinaryListValues, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `BinaryListValue.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = value;
        });
    }
    if (input.DataType !== undefined && input.DataType !== null) {
        entries["DataType"] = input.DataType;
    }
    return entries;
};
const serializeAws_querySendMessageRequest = (input, context) => {
    const entries = {};
    if (input.QueueUrl !== undefined && input.QueueUrl !== null) {
        entries["QueueUrl"] = input.QueueUrl;
    }
    if (input.MessageBody !== undefined && input.MessageBody !== null) {
        entries["MessageBody"] = input.MessageBody;
    }
    if (input.DelaySeconds !== undefined && input.DelaySeconds !== null) {
        entries["DelaySeconds"] = input.DelaySeconds;
    }
    if (input.MessageAttributes !== undefined && input.MessageAttributes !== null) {
        const memberEntries = serializeAws_queryMessageBodyAttributeMap(input.MessageAttributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `MessageAttribute.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = value;
        });
    }
    if (input.MessageSystemAttributes !== undefined && input.MessageSystemAttributes !== null) {
        const memberEntries = serializeAws_queryMessageBodySystemAttributeMap(input.MessageSystemAttributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `MessageSystemAttribute.${key.substring(key.indexOf(".") + 1)}`;
            entries[loc] = value;
        });
    }
    if (input.MessageDeduplicationId !== undefined && input.MessageDeduplicationId !== null) {
        entries["MessageDeduplicationId"] = input.MessageDeduplicationId;
    }
    if (input.MessageGroupId !== undefined && input.MessageGroupId !== null) {
        entries["MessageGroupId"] = input.MessageGroupId;
    }
    return entries;
};
const serializeAws_queryStringList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`StringListValue.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const deserializeAws_queryInvalidMessageContents = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_querySendMessageResult = (output, context) => {
    let contents = {
        MD5OfMessageBody: undefined,
        MD5OfMessageAttributes: undefined,
        MD5OfMessageSystemAttributes: undefined,
        MessageId: undefined,
        SequenceNumber: undefined,
    };
    if (output["MD5OfMessageBody"] !== undefined) {
        contents.MD5OfMessageBody = serdePlugin.expectString(output["MD5OfMessageBody"]);
    }
    if (output["MD5OfMessageAttributes"] !== undefined) {
        contents.MD5OfMessageAttributes = serdePlugin.expectString(output["MD5OfMessageAttributes"]);
    }
    if (output["MD5OfMessageSystemAttributes"] !== undefined) {
        contents.MD5OfMessageSystemAttributes = serdePlugin.expectString(output["MD5OfMessageSystemAttributes"]);
    }
    if (output["MessageId"] !== undefined) {
        contents.MessageId = serdePlugin.expectString(output["MessageId"]);
    }
    if (output["SequenceNumber"] !== undefined) {
        contents.SequenceNumber = serdePlugin.expectString(output["SequenceNumber"]);
    }
    return contents;
};
const deserializeAws_queryUnsupportedOperation = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new serdePlugin.HttpRequest(contents);
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        const parsedObj = serdePlugin.parser.parse(encoded, {
            attributeNamePrefix: "",
            ignoreAttributes: false,
            parseNodeValue: false,
            trimValues: false,
            tagValueProcessor: (val) => (val.trim() === "" && val.includes("\n") ? "" : serdePlugin.lib.decodeHTML(val)),
        });
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return serdePlugin.getValueFromTextNode(parsedObjToReturn);
    }
    return {};
});
const buildFormUrlencodedString = (formEntries) => Object.entries(formEntries)
    .map(([key, value]) => serdePlugin.extendedEncodeURIComponent(key) + "=" + serdePlugin.extendedEncodeURIComponent(value))
    .join("&");
const loadQueryErrorCode = (output, data) => {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};

var sendMessageMiddleware = function (options) {
    return function (next) {
        return function (args) { return serdePlugin.__awaiter(void 0, void 0, void 0, function () {
            var resp, output, hash, _a, _b;
            return serdePlugin.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, next(serdePlugin.__assign({}, args))];
                    case 1:
                        resp = _c.sent();
                        output = resp.output;
                        hash = new options.md5();
                        hash.update(args.input.MessageBody || "");
                        _a = output.MD5OfMessageBody;
                        _b = index.toHex;
                        return [4 /*yield*/, hash.digest()];
                    case 2:
                        if (_a !== _b.apply(void 0, [_c.sent()])) {
                            throw new Error("InvalidChecksumError");
                        }
                        return [2 /*return*/, resp];
                }
            });
        }); };
    };
};
var sendMessageMiddlewareOptions = {
    step: "initialize",
    tags: ["VALIDATE_BODY_MD5"],
    name: "sendMessageMiddleware",
    override: true,
};
var getSendMessagePlugin = function (config) { return ({
    applyToStack: function (clientStack) {
        clientStack.add(sendMessageMiddleware(config), sendMessageMiddlewareOptions);
    },
}); };

/**
 * <p>Delivers a message to the specified queue.</p>
 *          <important>
 *            <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p>
 *            <p>
 *                <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code>
 *             </p>
 * 	           <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, SendMessageCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new SendMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendMessageCommandInput} for command's `input` shape.
 * @see {@link SendMessageCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class SendMessageCommand extends serdePlugin.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(serdePlugin.getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getSendMessagePlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SQSClient";
        const commandName = "SendMessageCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: SendMessageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendMessageResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_querySendMessageCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_querySendMessageCommand(output, context);
    }
}

exports.SendMessageCommand = SendMessageCommand;
