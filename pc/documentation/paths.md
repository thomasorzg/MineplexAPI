
<a name="paths"></a>
## Paths

<a name="amplifier-get"></a>
### Get Amplifiers
```
GET /amplifier
```


#### Description
Returns a dictionary mapping amplifier groups to an array of Amplifiers.


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|Success|< string, < [Amplifier](#amplifier) > array > map|
|**default**|Unexpected error|[Error](#error)|


#### Tags

* Amplifier


#### Security

|Type|Name|
|---|---|
|**apiKey**|**[apiKey](#apikey)**|


<a name="amplifier-amplifiergroup-get"></a>
### Get Amplifiers from Amplifier Group
```
GET /amplifier/{amplifiergroup}
```


#### Description
Returns an array of amplifiers for that group


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**amplifiergroup**  <br>*required*|Amplifier Group|string|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|Success|< [Amplifier](#amplifier) > array|
|**default**|Unexpected error|[Error](#error)|


#### Tags

* Amplifier


#### Security

|Type|Name|
|---|---|
|**apiKey**|**[apiKey](#apikey)**|


<a name="amplifiergroup-get"></a>
### Get Amplifier Groups
```
GET /amplifierGroup
```


#### Description
Returns an array of strings representing all available amplifier groups


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|Success|< string > array|
|**default**|Unexpected error|[Error](#error)|


#### Tags

* Amplifier


#### Security

|Type|Name|
|---|---|
|**apiKey**|**[apiKey](#apikey)**|


<a name="player-player-get"></a>
### Get Player Data
```
GET /player/{player}
```


#### Description
The Products endpoint returns information about the *Uber* products
offered at a given location. The response includes the display name
and other details about each product, and lists the products in the
proper display order.


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**player**  <br>*required*|Name or UUID of the player|string(uuid or player name)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|An array of products|[Player](#player)|
|**default**|Unexpected error|[Error](#error)|


#### Tags

* Player


#### Security

|Type|Name|
|---|---|
|**apiKey**|**[apiKey](#apikey)**|


<a name="player-player-friends-get"></a>
### Get Player Friends
```
GET /player/{player}/friends
```


#### Description
The Products endpoint returns information about the *Uber* products
offered at a given location. The response includes the display name
and other details about each product, and lists the products in the
proper display order.


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**player**  <br>*required*|Name or UUID of the player|string(uuid or player name)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|Success|< [PlayerBase](#playerbase) > array|
|**default**|Unexpected error|[Error](#error)|


#### Tags

* Player


#### Security

|Type|Name|
|---|---|
|**apiKey**|**[apiKey](#apikey)**|


<a name="player-player-status-get"></a>
### Get Player Status
```
GET /player/{player}/status
```


#### Description
The Products endpoint returns information about the *Uber* products
offered at a given location. The response includes the display name
and other details about each product, and lists the products in the
proper display order.


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Path**|**player**  <br>*required*|Name or UUID of the player|string(uuid or player name)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|Success|[PlayerStatus](#playerstatus)|
|**default**|Unexpected error|[Error](#error)|


#### Tags

* Player


#### Security

|Type|Name|
|---|---|
|**apiKey**|**[apiKey](#apikey)**|



