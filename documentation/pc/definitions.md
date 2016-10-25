
<a name="definitions"></a>
## Definitions

<a name="amplifier"></a>
### Amplifier

|Name|Description|Schema|
|---|---|---|
|**activationTime**  <br>*required*||string(date-time)|
|**duration**  <br>*required*||integer|
|**endTime**  <br>*required*||string(date-time)|
|**multiplier**  <br>*required*||number|
|**playerName**  <br>*required*|The player that activated this Amplifier|string|
|**startTime**  <br>*required*||string(date-time)|
|**uuid**  <br>*required*|The UUID of the player that activated this Amplifier|string|


<a name="error"></a>
### Error

|Name|Description|Schema|
|---|---|---|
|**error**  <br>*optional*|Description of the error|string|
|**statusCode**  <br>*required*|HTTP status code sent with this error|integer|


<a name="player"></a>
### Player
*Polymorphism* : Composition


|Name|Description|Schema|
|---|---|---|
|**friends**  <br>*optional*||< [PlayerBase](#playerbase) > array|
|**lastLogin**  <br>*optional*||string(date)|
|**name**  <br>*required*|The player's name|string|
|**rank**  <br>*optional*||string|
|**status**  <br>*optional*||[PlayerStatus](#playerstatus)|
|**uuid**  <br>*required*|The player's UUID, including dashes|string|


<a name="playerbase"></a>
### PlayerBase

|Name|Description|Schema|
|---|---|---|
|**name**  <br>*required*|The player's name|string|
|**uuid**  <br>*required*|The player's UUID, including dashes|string|


<a name="playerstatus"></a>
### PlayerStatus

|Name|Description|Schema|
|---|---|---|
|**online**  <br>*required*|Is the player online right now?|boolean|
|**server**  <br>*optional*|The server the player is connected to. Only present if online is true.|string|



