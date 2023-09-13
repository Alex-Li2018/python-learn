import * as jspb from 'google-protobuf'



export class TalkConfigRequest extends jspb.Message {
  getCharacter(): string;
  setCharacter(value: string): TalkConfigRequest;

  getText(): string;
  setText(value: string): TalkConfigRequest;

  getFps(): number;
  setFps(value: number): TalkConfigRequest;

  getSceneId(): string;
  setSceneId(value: string): TalkConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TalkConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TalkConfigRequest): TalkConfigRequest.AsObject;
  static serializeBinaryToWriter(message: TalkConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TalkConfigRequest;
  static deserializeBinaryFromReader(message: TalkConfigRequest, reader: jspb.BinaryReader): TalkConfigRequest;
}

export namespace TalkConfigRequest {
  export type AsObject = {
    character: string,
    text: string,
    fps: number,
    sceneId: string,
  }
}

export class AudioMessage extends jspb.Message {
  getAduio(): string;
  setAduio(value: string): AudioMessage;

  getEmitTime(): string;
  setEmitTime(value: string): AudioMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AudioMessage): AudioMessage.AsObject;
  static serializeBinaryToWriter(message: AudioMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioMessage;
  static deserializeBinaryFromReader(message: AudioMessage, reader: jspb.BinaryReader): AudioMessage;
}

export namespace AudioMessage {
  export type AsObject = {
    aduio: string,
    emitTime: string,
  }
}

export class ImageFrameMessage extends jspb.Message {
  getFaceBoxList(): Array<number>;
  setFaceBoxList(value: Array<number>): ImageFrameMessage;
  clearFaceBoxList(): ImageFrameMessage;
  addFaceBox(value: number, index?: number): ImageFrameMessage;

  getEmitTime(): string;
  setEmitTime(value: string): ImageFrameMessage;

  getSceneFrameIdx(): number;
  setSceneFrameIdx(value: number): ImageFrameMessage;

  getClipFrameIdx(): number;
  setClipFrameIdx(value: number): ImageFrameMessage;

  getSceneFrameTotal(): number;
  setSceneFrameTotal(value: number): ImageFrameMessage;

  getImage(): string;
  setImage(value: string): ImageFrameMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageFrameMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ImageFrameMessage): ImageFrameMessage.AsObject;
  static serializeBinaryToWriter(message: ImageFrameMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageFrameMessage;
  static deserializeBinaryFromReader(message: ImageFrameMessage, reader: jspb.BinaryReader): ImageFrameMessage;
}

export namespace ImageFrameMessage {
  export type AsObject = {
    faceBoxList: Array<number>,
    emitTime: string,
    sceneFrameIdx: number,
    clipFrameIdx: number,
    sceneFrameTotal: number,
    image: string,
  }
}

export class EndMessage extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): EndMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EndMessage): EndMessage.AsObject;
  static serializeBinaryToWriter(message: EndMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndMessage;
  static deserializeBinaryFromReader(message: EndMessage, reader: jspb.BinaryReader): EndMessage;
}

export namespace EndMessage {
  export type AsObject = {
    message: string,
  }
}

export class StreamMessage extends jspb.Message {
  getCode(): string;
  setCode(value: string): StreamMessage;

  getAudioinfo(): AudioMessage | undefined;
  setAudioinfo(value?: AudioMessage): StreamMessage;
  hasAudioinfo(): boolean;
  clearAudioinfo(): StreamMessage;

  getImageinfo(): ImageFrameMessage | undefined;
  setImageinfo(value?: ImageFrameMessage): StreamMessage;
  hasImageinfo(): boolean;
  clearImageinfo(): StreamMessage;

  getEndinfo(): EndMessage | undefined;
  setEndinfo(value?: EndMessage): StreamMessage;
  hasEndinfo(): boolean;
  clearEndinfo(): StreamMessage;

  getValueCase(): StreamMessage.ValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamMessage.AsObject;
  static toObject(includeInstance: boolean, msg: StreamMessage): StreamMessage.AsObject;
  static serializeBinaryToWriter(message: StreamMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamMessage;
  static deserializeBinaryFromReader(message: StreamMessage, reader: jspb.BinaryReader): StreamMessage;
}

export namespace StreamMessage {
  export type AsObject = {
    code: string,
    audioinfo?: AudioMessage.AsObject,
    imageinfo?: ImageFrameMessage.AsObject,
    endinfo?: EndMessage.AsObject,
  }

  export enum ValueCase { 
    VALUE_NOT_SET = 0,
    AUDIOINFO = 2,
    IMAGEINFO = 3,
    ENDINFO = 4,
  }
}

