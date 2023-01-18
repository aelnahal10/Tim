import React from "react";
import { Text, TouchableOpacity } from "react-native";
import * as Speech from 'expo-speech';


// Component to only use text to speech
// phrase => what will be said in TTS
export class Say extends React.Component {
  render() {
    return (
      <Text onPress={Speech.speak(this.props.phrase, {voice: "com.apple.ttsbundle.siri_Catherine_en-AU_compact"})} />
    )
  };
}
// Component to create TTS touchable text
// phrase => what will be said in TTS
// text => what will be displayed
export class TTSText extends React.Component {
  render() {
    return (
      <TouchableOpacity style={{alignItems:'center'}}>
        {this.props.autoRead === undefined ? Speech.speak(this.props.phrase) : null}
        <Text style={this.props.style} onPress={()=>{Speech.stop(); Speech.speak(this.props.phrase, {voice: "com.apple.ttsbundle.siri_Catherine_en-AU_compact"});} } >{this.props.text}</Text>
      </TouchableOpacity>
    )
  };
}

  // available voices {
//   "identifier": "com.apple.ttsbundle.siri_Gordon_en-AU_compact",
//   "identifier": "com.apple.voice.compact.en-AU.Karen",
//   "identifier": "com.apple.ttsbundle.siri_Catherine_en-AU_compact",
//   "identifier": "com.apple.eloquence.en-GB.Rocko",
//   "identifier": "com.apple.eloquence.en-GB.Shelley",
//   "identifier": "com.apple.voice.compact.en-GB.Daniel",
//   "identifier": "com.apple.ttsbundle.siri_Martha_en-GB_compact",
//   "identifier": "com.apple.eloquence.en-GB.Grandma",
//   "identifier": "com.apple.eloquence.en-GB.Grandpa",
//   "identifier": "com.apple.eloquence.en-GB.Flo",
//   "identifier": "com.apple.eloquence.en-GB.Eddy",
//   "identifier": "com.apple.eloquence.en-GB.Reed",
//   "identifier": "com.apple.eloquence.en-GB.Sandy",
//   "identifier": "com.apple.ttsbundle.siri_Arthur_en-GB_compact",
//   "identifier": "com.apple.voice.compact.en-IE.Moira",
//   "identifier": "com.apple.voice.compact.en-IN.Rishi",
//   "identifier": "com.apple.eloquence.en-US.Flo",
//   "identifier": "com.apple.speech.synthesis.voice.Bahh",
//   "identifier": "com.apple.speech.synthesis.voice.Albert",
//   "identifier": "com.apple.speech.synthesis.voice.Fred",
//   "identifier": "com.apple.speech.synthesis.voice.Hysterical",
//   "identifier": "com.apple.speech.synthesis.voice.Organ",
//   "identifier": "com.apple.speech.synthesis.voice.Cellos",
//   "identifier": "com.apple.speech.synthesis.voice.Zarvox",
//   "identifier": "com.apple.eloquence.en-US.Rocko",
//   "identifier": "com.apple.eloquence.en-US.Shelley",
//   "identifier": "com.apple.speech.synthesis.voice.Princess",
//   "identifier": "com.apple.eloquence.en-US.Grandma",
//   "identifier": "com.apple.eloquence.en-US.Eddy",
//   "identifier": "com.apple.speech.synthesis.voice.Bells",
//   "language": "en-US",
//   "identifier": "com.apple.eloquence.en-US.Grandpa",
//   "identifier": "com.apple.speech.synthesis.voice.Trinoids",
//   "identifier": "com.apple.speech.synthesis.voice.Kathy",
//   "identifier": "com.apple.eloquence.en-US.Reed",
//   "identifier": "com.apple.speech.synthesis.voice.Boing",
//   "identifier": "com.apple.speech.synthesis.voice.Whisper",
//   "identifier": "com.apple.speech.synthesis.voice.Deranged",
//   "identifier": "com.apple.speech.synthesis.voice.GoodNews",
//   "identifier": "com.apple.ttsbundle.siri_Nicky_en-US_compact",
//   "identifier": "com.apple.speech.synthesis.voice.BadNews",
//   "identifier": "com.apple.ttsbundle.siri_Aaron_en-US_compact",
//   "identifier": "com.apple.speech.synthesis.voice.Bubbles",
//   "identifier": "com.apple.voice.compact.en-US.Samantha",
//   "identifier": "com.apple.eloquence.en-US.Sandy",
//   "identifier": "com.apple.speech.synthesis.voice.Junior",
//   "identifier": "com.apple.speech.synthesis.voice.Ralph",
//   "identifier": "com.apple.voice.compact.en-ZA.Tessa",
// }