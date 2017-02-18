
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
|**lastLogin**  <br>*optional*|The player's last attempted login to the network|string(date)|
|**name**  <br>*required*|The player's name|string|
|**rank**  <br>*optional*|The player's rank|string|
|**uuid**  <br>*required*|The player's UUID, including dashes|string|
|**stats**  <br>*required*|The player's stats for all games and categories|object|
|**gems** <br>*required*|The player's current gem count|integer
|**shards** <br>*required*|The player's current shard count|integer
|**level** <br>*required*|The player's level value and color|object
|**activeTitle** <br>*required*|The currently active title track|string

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

<a name="fountain"></a>
###Fountain
|Name|Description|Schema|
|---|---|---|
|**brawlActive**  <br>*required*|Is the brawl active right now?|boolean|
|**percent**  <br>*required*|The current fill level of the fountain|integer|