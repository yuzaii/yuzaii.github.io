var pageSetting=2;//1-vlan;2-ip;3-ssid;4:区域ID;5-时间(暂不使用,保留);6-ipv6;7-many
var pageStyle="standard";//standard-标准版;business-商业版;campus-校园版;secnic-景区版;hotel-酒店版;technology-科技版;
/********************  多段式对应配置  ********************/
var manyPageAry = new Array(301);// 空表示未使用
/*
* 字段定义:名称|起始段|结束段|重定向地址|审核标记|认证方式|操作员
* 起始时间(调整):以;分隔,与结束时间组成多时间段,要求一一对应
* 结束时间(调整):以;分隔
* 举例:起始时间为"01:00:00;21:00:00",结束时间为"13:00:00;22:00:00",则代表01:00:00-13:00:00和21:00:00-22:00:00两个时间段
* 虚拟商号(调整):配置@xxx方式直接作为后缀时,发送短信使用机身编号;配置私有云审核的虚拟商号则取后四位作为后缀,发送短信直接使用其作为机身编号
* 审核标记:0-未审核;1-审核通过;2-审核拒绝
* 认证方式:0-本地认证;1-PORTAL协议;2-Ruckus;3-Cisco;4-Moto;5-JUN时间ER(暂未实现);6-Aruba6.4.2.2;7-Aruba旧版本
* 操作员：操作员账号用;号隔开
* 页面匹配方式：1-vlan;2-ip;3-ssid;4:区域ID;5-时间(暂不使用,保留);6-ipv6;7-apmac 用;号隔开
* 保存数据格式:默认模版|01:00:00;21:00:00|13:00:00;22:00:00|http://www.baidu.com|1|0|admin;11
*/
manyPageAry[0]="默认模版|000;123456789012;00:00:00|000;123456789012;23:59:59|||1|0|admin|3;7;5";
manyPageAry[1]="";
manyPageAry[2]="";
manyPageAry[3]="";
manyPageAry[4]="";
manyPageAry[5]="";
manyPageAry[6]="";
manyPageAry[7]="";
manyPageAry[8]="";
manyPageAry[9]="";
manyPageAry[10]="";
manyPageAry[11]="";
manyPageAry[12]="";
manyPageAry[13]="";
manyPageAry[14]="";
manyPageAry[15]="";
manyPageAry[16]="";
manyPageAry[17]="";
manyPageAry[18]="";
manyPageAry[19]="";
manyPageAry[20]="";
manyPageAry[21]="";
manyPageAry[22]="";
manyPageAry[23]="";
manyPageAry[24]="";
manyPageAry[25]="";
manyPageAry[26]="";
manyPageAry[27]="";
manyPageAry[28]="";
manyPageAry[29]="";
manyPageAry[30]="";
manyPageAry[31]="";
manyPageAry[32]="";
manyPageAry[33]="";
manyPageAry[34]="";
manyPageAry[35]="";
manyPageAry[36]="";
manyPageAry[37]="";
manyPageAry[38]="";
manyPageAry[39]="";
manyPageAry[40]="";
manyPageAry[41]="";
manyPageAry[42]="";
manyPageAry[43]="";
manyPageAry[44]="";
manyPageAry[45]="";
manyPageAry[46]="";
manyPageAry[47]="";
manyPageAry[48]="";
manyPageAry[49]="";
manyPageAry[50]="";
manyPageAry[51]="";
manyPageAry[52]="";
manyPageAry[53]="";
manyPageAry[54]="";
manyPageAry[55]="";
manyPageAry[56]="";
manyPageAry[57]="";
manyPageAry[58]="";
manyPageAry[59]="";
manyPageAry[60]="";
manyPageAry[61]="";
manyPageAry[62]="";
manyPageAry[63]="";
manyPageAry[64]="";
manyPageAry[65]="";
manyPageAry[66]="";
manyPageAry[67]="";
manyPageAry[68]="";
manyPageAry[69]="";
manyPageAry[70]="";
manyPageAry[71]="";
manyPageAry[72]="";
manyPageAry[73]="";
manyPageAry[74]="";
manyPageAry[75]="";
manyPageAry[76]="";
manyPageAry[77]="";
manyPageAry[78]="";
manyPageAry[79]="";
manyPageAry[80]="";
manyPageAry[81]="";
manyPageAry[82]="";
manyPageAry[83]="";
manyPageAry[84]="";
manyPageAry[85]="";
manyPageAry[86]="";
manyPageAry[87]="";
manyPageAry[88]="";
manyPageAry[89]="";
manyPageAry[90]="";
manyPageAry[91]="";
manyPageAry[92]="";
manyPageAry[93]="";
manyPageAry[94]="";
manyPageAry[95]="";
manyPageAry[96]="";
manyPageAry[97]="";
manyPageAry[98]="";
manyPageAry[99]="";
manyPageAry[100]="";
manyPageAry[101]="";
manyPageAry[102]="";
manyPageAry[103]="";
manyPageAry[104]="";
manyPageAry[105]="";
manyPageAry[106]="";
manyPageAry[107]="";
manyPageAry[108]="";
manyPageAry[109]="";
manyPageAry[110]="";
manyPageAry[111]="";
manyPageAry[112]="";
manyPageAry[113]="";
manyPageAry[114]="";
manyPageAry[115]="";
manyPageAry[116]="";
manyPageAry[117]="";
manyPageAry[118]="";
manyPageAry[119]="";
manyPageAry[120]="";
manyPageAry[121]="";
manyPageAry[122]="";
manyPageAry[123]="";
manyPageAry[124]="";
manyPageAry[125]="";
manyPageAry[126]="";
manyPageAry[127]="";
manyPageAry[128]="";
manyPageAry[129]="";
manyPageAry[130]="";
manyPageAry[131]="";
manyPageAry[132]="";
manyPageAry[133]="";
manyPageAry[134]="";
manyPageAry[135]="";
manyPageAry[136]="";
manyPageAry[137]="";
manyPageAry[138]="";
manyPageAry[139]="";
manyPageAry[140]="";
manyPageAry[141]="";
manyPageAry[142]="";
manyPageAry[143]="";
manyPageAry[144]="";
manyPageAry[145]="";
manyPageAry[146]="";
manyPageAry[147]="";
manyPageAry[148]="";
manyPageAry[149]="";
manyPageAry[150]="";
manyPageAry[151]="";
manyPageAry[152]="";
manyPageAry[153]="";
manyPageAry[154]="";
manyPageAry[155]="";
manyPageAry[156]="";
manyPageAry[157]="";
manyPageAry[158]="";
manyPageAry[159]="";
manyPageAry[160]="";
manyPageAry[161]="";
manyPageAry[162]="";
manyPageAry[163]="";
manyPageAry[164]="";
manyPageAry[165]="";
manyPageAry[166]="";
manyPageAry[167]="";
manyPageAry[168]="";
manyPageAry[169]="";
manyPageAry[170]="";
manyPageAry[171]="";
manyPageAry[172]="";
manyPageAry[173]="";
manyPageAry[174]="";
manyPageAry[175]="";
manyPageAry[176]="";
manyPageAry[177]="";
manyPageAry[178]="";
manyPageAry[179]="";
manyPageAry[180]="";
manyPageAry[181]="";
manyPageAry[182]="";
manyPageAry[183]="";
manyPageAry[184]="";
manyPageAry[185]="";
manyPageAry[186]="";
manyPageAry[187]="";
manyPageAry[188]="";
manyPageAry[189]="";
manyPageAry[190]="";
manyPageAry[191]="";
manyPageAry[192]="";
manyPageAry[193]="";
manyPageAry[194]="";
manyPageAry[195]="";
manyPageAry[196]="";
manyPageAry[197]="";
manyPageAry[198]="";
manyPageAry[199]="";
manyPageAry[200]="";
manyPageAry[201]="";
manyPageAry[202]="";
manyPageAry[203]="";
manyPageAry[204]="";
manyPageAry[205]="";
manyPageAry[206]="";
manyPageAry[207]="";
manyPageAry[208]="";
manyPageAry[209]="";
manyPageAry[210]="";
manyPageAry[211]="";
manyPageAry[212]="";
manyPageAry[213]="";
manyPageAry[214]="";
manyPageAry[215]="";
manyPageAry[216]="";
manyPageAry[217]="";
manyPageAry[218]="";
manyPageAry[219]="";
manyPageAry[220]="";
manyPageAry[221]="";
manyPageAry[222]="";
manyPageAry[223]="";
manyPageAry[224]="";
manyPageAry[225]="";
manyPageAry[226]="";
manyPageAry[227]="";
manyPageAry[228]="";
manyPageAry[229]="";
manyPageAry[230]="";
manyPageAry[231]="";
manyPageAry[232]="";
manyPageAry[233]="";
manyPageAry[234]="";
manyPageAry[235]="";
manyPageAry[236]="";
manyPageAry[237]="";
manyPageAry[238]="";
manyPageAry[239]="";
manyPageAry[240]="";
manyPageAry[241]="";
manyPageAry[242]="";
manyPageAry[243]="";
manyPageAry[244]="";
manyPageAry[245]="";
manyPageAry[246]="";
manyPageAry[247]="";
manyPageAry[248]="";
manyPageAry[249]="";
manyPageAry[250]="";
manyPageAry[251]="";
manyPageAry[252]="";
manyPageAry[253]="";
manyPageAry[254]="";
manyPageAry[255]="";
manyPageAry[256]="";
manyPageAry[257]="";
manyPageAry[258]="";
manyPageAry[259]="";
manyPageAry[260]="";
manyPageAry[261]="";
manyPageAry[262]="";
manyPageAry[263]="";
manyPageAry[264]="";
manyPageAry[265]="";
manyPageAry[266]="";
manyPageAry[267]="";
manyPageAry[268]="";
manyPageAry[269]="";
manyPageAry[270]="";
manyPageAry[271]="";
manyPageAry[272]="";
manyPageAry[273]="";
manyPageAry[274]="";
manyPageAry[275]="";
manyPageAry[276]="";
manyPageAry[277]="";
manyPageAry[278]="";
manyPageAry[279]="";
manyPageAry[280]="";
manyPageAry[281]="";
manyPageAry[282]="";
manyPageAry[283]="";
manyPageAry[284]="";
manyPageAry[285]="";
manyPageAry[286]="";
manyPageAry[287]="";
manyPageAry[288]="";
manyPageAry[289]="";
manyPageAry[290]="";
manyPageAry[291]="";
manyPageAry[292]="";
manyPageAry[293]="";
manyPageAry[294]="";
manyPageAry[295]="";
manyPageAry[296]="";
manyPageAry[297]="";
manyPageAry[298]="";
manyPageAry[299]="";
manyPageAry[300]="";
/********************  SSID外置登陆对应配置  ********************/
var ssidPageAry = new Array(301);// 空表示未使用
/*
* 字段定义:名称|多SSID段|虚拟商号|重定向地址|审核标记|认证方式|操作员
* 多SSID段(调整):多SSID段以;分隔,要求支持中文和特殊符号
* 虚拟商号(调整):配置@xxx方式直接作为后缀时,发送短信使用机身编号;配置私有云审核的虚拟商号则取后四位作为后缀,发送短信直接使用其作为机身编号
* 审核标记:0-未审核;1-审核通过;2-审核拒绝
* 认证方式:0-本地认证;1-PORTAL协议;2-Ruckus;3-Cisco;4-Moto;5-JUNIPER(暂未实现);6-Aruba6.4.2.2;7-Aruba旧版本
* 保存数据格式:默认模版|000;123|@123|http://www.baidu.com|1|0|admin;11
*/
ssidPageAry[0]="默认模版|000|||1|0|";
ssidPageAry[1]="";
ssidPageAry[2]="";
ssidPageAry[3]="";
ssidPageAry[4]="";
ssidPageAry[5]="";
ssidPageAry[6]="";
ssidPageAry[7]="";
ssidPageAry[8]="";
ssidPageAry[9]="";
ssidPageAry[10]="";
ssidPageAry[11]="";
ssidPageAry[12]="";
ssidPageAry[13]="";
ssidPageAry[14]="";
ssidPageAry[15]="";
ssidPageAry[16]="";
ssidPageAry[17]="";
ssidPageAry[18]="";
ssidPageAry[19]="";
ssidPageAry[20]="";
ssidPageAry[21]="";
ssidPageAry[22]="";
ssidPageAry[23]="";
ssidPageAry[24]="";
ssidPageAry[25]="";
ssidPageAry[26]="";
ssidPageAry[27]="";
ssidPageAry[28]="";
ssidPageAry[29]="";
ssidPageAry[30]="";
ssidPageAry[31]="";
ssidPageAry[32]="";
ssidPageAry[33]="";
ssidPageAry[34]="";
ssidPageAry[35]="";
ssidPageAry[36]="";
ssidPageAry[37]="";
ssidPageAry[38]="";
ssidPageAry[39]="";
ssidPageAry[40]="";
ssidPageAry[41]="";
ssidPageAry[42]="";
ssidPageAry[43]="";
ssidPageAry[44]="";
ssidPageAry[45]="";
ssidPageAry[46]="";
ssidPageAry[47]="";
ssidPageAry[48]="";
ssidPageAry[49]="";
ssidPageAry[50]="";
ssidPageAry[51]="";
ssidPageAry[52]="";
ssidPageAry[53]="";
ssidPageAry[54]="";
ssidPageAry[55]="";
ssidPageAry[56]="";
ssidPageAry[57]="";
ssidPageAry[58]="";
ssidPageAry[59]="";
ssidPageAry[60]="";
ssidPageAry[61]="";
ssidPageAry[62]="";
ssidPageAry[63]="";
ssidPageAry[64]="";
ssidPageAry[65]="";
ssidPageAry[66]="";
ssidPageAry[67]="";
ssidPageAry[68]="";
ssidPageAry[69]="";
ssidPageAry[70]="";
ssidPageAry[71]="";
ssidPageAry[72]="";
ssidPageAry[73]="";
ssidPageAry[74]="";
ssidPageAry[75]="";
ssidPageAry[76]="";
ssidPageAry[77]="";
ssidPageAry[78]="";
ssidPageAry[79]="";
ssidPageAry[80]="";
ssidPageAry[81]="";
ssidPageAry[82]="";
ssidPageAry[83]="";
ssidPageAry[84]="";
ssidPageAry[85]="";
ssidPageAry[86]="";
ssidPageAry[87]="";
ssidPageAry[88]="";
ssidPageAry[89]="";
ssidPageAry[90]="";
ssidPageAry[91]="";
ssidPageAry[92]="";
ssidPageAry[93]="";
ssidPageAry[94]="";
ssidPageAry[95]="";
ssidPageAry[96]="";
ssidPageAry[97]="";
ssidPageAry[98]="";
ssidPageAry[99]="";
ssidPageAry[100]="";
ssidPageAry[101]="";
ssidPageAry[102]="";
ssidPageAry[103]="";
ssidPageAry[104]="";
ssidPageAry[105]="";
ssidPageAry[106]="";
ssidPageAry[107]="";
ssidPageAry[108]="";
ssidPageAry[109]="";
ssidPageAry[110]="";
ssidPageAry[111]="";
ssidPageAry[112]="";
ssidPageAry[113]="";
ssidPageAry[114]="";
ssidPageAry[115]="";
ssidPageAry[116]="";
ssidPageAry[117]="";
ssidPageAry[118]="";
ssidPageAry[119]="";
ssidPageAry[120]="";
ssidPageAry[121]="";
ssidPageAry[122]="";
ssidPageAry[123]="";
ssidPageAry[124]="";
ssidPageAry[125]="";
ssidPageAry[126]="";
ssidPageAry[127]="";
ssidPageAry[128]="";
ssidPageAry[129]="";
ssidPageAry[130]="";
ssidPageAry[131]="";
ssidPageAry[132]="";
ssidPageAry[133]="";
ssidPageAry[134]="";
ssidPageAry[135]="";
ssidPageAry[136]="";
ssidPageAry[137]="";
ssidPageAry[138]="";
ssidPageAry[139]="";
ssidPageAry[140]="";
ssidPageAry[141]="";
ssidPageAry[142]="";
ssidPageAry[143]="";
ssidPageAry[144]="";
ssidPageAry[145]="";
ssidPageAry[146]="";
ssidPageAry[147]="";
ssidPageAry[148]="";
ssidPageAry[149]="";
ssidPageAry[150]="";
ssidPageAry[151]="";
ssidPageAry[152]="";
ssidPageAry[153]="";
ssidPageAry[154]="";
ssidPageAry[155]="";
ssidPageAry[156]="";
ssidPageAry[157]="";
ssidPageAry[158]="";
ssidPageAry[159]="";
ssidPageAry[160]="";
ssidPageAry[161]="";
ssidPageAry[162]="";
ssidPageAry[163]="";
ssidPageAry[164]="";
ssidPageAry[165]="";
ssidPageAry[166]="";
ssidPageAry[167]="";
ssidPageAry[168]="";
ssidPageAry[169]="";
ssidPageAry[170]="";
ssidPageAry[171]="";
ssidPageAry[172]="";
ssidPageAry[173]="";
ssidPageAry[174]="";
ssidPageAry[175]="";
ssidPageAry[176]="";
ssidPageAry[177]="";
ssidPageAry[178]="";
ssidPageAry[179]="";
ssidPageAry[180]="";
ssidPageAry[181]="";
ssidPageAry[182]="";
ssidPageAry[183]="";
ssidPageAry[184]="";
ssidPageAry[185]="";
ssidPageAry[186]="";
ssidPageAry[187]="";
ssidPageAry[188]="";
ssidPageAry[189]="";
ssidPageAry[190]="";
ssidPageAry[191]="";
ssidPageAry[192]="";
ssidPageAry[193]="";
ssidPageAry[194]="";
ssidPageAry[195]="";
ssidPageAry[196]="";
ssidPageAry[197]="";
ssidPageAry[198]="";
ssidPageAry[199]="";
ssidPageAry[200]="";
ssidPageAry[201]="";
ssidPageAry[202]="";
ssidPageAry[203]="";
ssidPageAry[204]="";
ssidPageAry[205]="";
ssidPageAry[206]="";
ssidPageAry[207]="";
ssidPageAry[208]="";
ssidPageAry[209]="";
ssidPageAry[210]="";
ssidPageAry[211]="";
ssidPageAry[212]="";
ssidPageAry[213]="";
ssidPageAry[214]="";
ssidPageAry[215]="";
ssidPageAry[216]="";
ssidPageAry[217]="";
ssidPageAry[218]="";
ssidPageAry[219]="";
ssidPageAry[220]="";
ssidPageAry[221]="";
ssidPageAry[222]="";
ssidPageAry[223]="";
ssidPageAry[224]="";
ssidPageAry[225]="";
ssidPageAry[226]="";
ssidPageAry[227]="";
ssidPageAry[228]="";
ssidPageAry[229]="";
ssidPageAry[230]="";
ssidPageAry[231]="";
ssidPageAry[232]="";
ssidPageAry[233]="";
ssidPageAry[234]="";
ssidPageAry[235]="";
ssidPageAry[236]="";
ssidPageAry[237]="";
ssidPageAry[238]="";
ssidPageAry[239]="";
ssidPageAry[240]="";
ssidPageAry[241]="";
ssidPageAry[242]="";
ssidPageAry[243]="";
ssidPageAry[244]="";
ssidPageAry[245]="";
ssidPageAry[246]="";
ssidPageAry[247]="";
ssidPageAry[248]="";
ssidPageAry[249]="";
ssidPageAry[250]="";
ssidPageAry[251]="";
ssidPageAry[252]="";
ssidPageAry[253]="";
ssidPageAry[254]="";
ssidPageAry[255]="";
ssidPageAry[256]="";
ssidPageAry[257]="";
ssidPageAry[258]="";
ssidPageAry[259]="";
ssidPageAry[260]="";
ssidPageAry[261]="";
ssidPageAry[262]="";
ssidPageAry[263]="";
ssidPageAry[264]="";
ssidPageAry[265]="";
ssidPageAry[266]="";
ssidPageAry[267]="";
ssidPageAry[268]="";
ssidPageAry[269]="";
ssidPageAry[270]="";
ssidPageAry[271]="";
ssidPageAry[272]="";
ssidPageAry[273]="";
ssidPageAry[274]="";
ssidPageAry[275]="";
ssidPageAry[276]="";
ssidPageAry[277]="";
ssidPageAry[278]="";
ssidPageAry[279]="";
ssidPageAry[280]="";
ssidPageAry[281]="";
ssidPageAry[282]="";
ssidPageAry[283]="";
ssidPageAry[284]="";
ssidPageAry[285]="";
ssidPageAry[286]="";
ssidPageAry[287]="";
ssidPageAry[288]="";
ssidPageAry[289]="";
ssidPageAry[290]="";
ssidPageAry[291]="";
ssidPageAry[292]="";
ssidPageAry[293]="";
ssidPageAry[294]="";
ssidPageAry[295]="";
ssidPageAry[296]="";
ssidPageAry[297]="";
ssidPageAry[298]="";
ssidPageAry[299]="";
ssidPageAry[300]="";

/********************  VLANID外置登陆对应配置  ********************/
var vlanPageAry = new Array(301);// 空表示未使用
/*
* 字段定义:名称|起始VLANID|结束VLANID|虚拟商号|重定向地址|审核标记|认证方式|操作员
* 起始VLANID(调整):以;分隔,与结束VLANID组成多VLAN段,要求一一对应
* 结束VLANID(调整):以;分隔
* 举例:起始VLANID为"1;1001",结束VLANID为"1000;2000",则代表1-1000和1001-2000两个VLAN段
* 虚拟商号(调整):配置@xxx方式直接作为后缀时,发送短信使用机身编号;配置私有云审核的虚拟商号则取后四位作为后缀,发送短信直接使用其作为机身编号
* 审核标记:0-未审核;1-审核通过;2-审核拒绝
* 认证方式:0-本地认证;1-PORTAL协议;2-Ruckus;3-Cisco;4-Moto;5-JUNIPER(暂未实现);6-Aruba6.4.2.2;7-Aruba旧版本
* 保存数据格式:默认模版|1;1001|1000;2000|http://www.baidu.com|1|0|admin;11
*/
vlanPageAry[0]="默认模版|0|4096|||1|0|";
vlanPageAry[1]="";
vlanPageAry[2]="";
vlanPageAry[3]="";
vlanPageAry[4]="";
vlanPageAry[5]="";
vlanPageAry[6]="";
vlanPageAry[7]="";
vlanPageAry[8]="";
vlanPageAry[9]="";
vlanPageAry[10]="";
vlanPageAry[11]="";
vlanPageAry[12]="";
vlanPageAry[13]="";
vlanPageAry[14]="";
vlanPageAry[15]="";
vlanPageAry[16]="";
vlanPageAry[17]="";
vlanPageAry[18]="";
vlanPageAry[19]="";
vlanPageAry[20]="";
vlanPageAry[21]="";
vlanPageAry[22]="";
vlanPageAry[23]="";
vlanPageAry[24]="";
vlanPageAry[25]="";
vlanPageAry[26]="";
vlanPageAry[27]="";
vlanPageAry[28]="";
vlanPageAry[29]="";
vlanPageAry[30]="";
vlanPageAry[31]="";
vlanPageAry[32]="";
vlanPageAry[33]="";
vlanPageAry[34]="";
vlanPageAry[35]="";
vlanPageAry[36]="";
vlanPageAry[37]="";
vlanPageAry[38]="";
vlanPageAry[39]="";
vlanPageAry[40]="";
vlanPageAry[41]="";
vlanPageAry[42]="";
vlanPageAry[43]="";
vlanPageAry[44]="";
vlanPageAry[45]="";
vlanPageAry[46]="";
vlanPageAry[47]="";
vlanPageAry[48]="";
vlanPageAry[49]="";
vlanPageAry[50]="";
vlanPageAry[51]="";
vlanPageAry[52]="";
vlanPageAry[53]="";
vlanPageAry[54]="";
vlanPageAry[55]="";
vlanPageAry[56]="";
vlanPageAry[57]="";
vlanPageAry[58]="";
vlanPageAry[59]="";
vlanPageAry[60]="";
vlanPageAry[61]="";
vlanPageAry[62]="";
vlanPageAry[63]="";
vlanPageAry[64]="";
vlanPageAry[65]="";
vlanPageAry[66]="";
vlanPageAry[67]="";
vlanPageAry[68]="";
vlanPageAry[69]="";
vlanPageAry[70]="";
vlanPageAry[71]="";
vlanPageAry[72]="";
vlanPageAry[73]="";
vlanPageAry[74]="";
vlanPageAry[75]="";
vlanPageAry[76]="";
vlanPageAry[77]="";
vlanPageAry[78]="";
vlanPageAry[79]="";
vlanPageAry[80]="";
vlanPageAry[81]="";
vlanPageAry[82]="";
vlanPageAry[83]="";
vlanPageAry[84]="";
vlanPageAry[85]="";
vlanPageAry[86]="";
vlanPageAry[87]="";
vlanPageAry[88]="";
vlanPageAry[89]="";
vlanPageAry[90]="";
vlanPageAry[91]="";
vlanPageAry[92]="";
vlanPageAry[93]="";
vlanPageAry[94]="";
vlanPageAry[95]="";
vlanPageAry[96]="";
vlanPageAry[97]="";
vlanPageAry[98]="";
vlanPageAry[99]="";
vlanPageAry[100]="";
vlanPageAry[101]="";
vlanPageAry[102]="";
vlanPageAry[103]="";
vlanPageAry[104]="";
vlanPageAry[105]="";
vlanPageAry[106]="";
vlanPageAry[107]="";
vlanPageAry[108]="";
vlanPageAry[109]="";
vlanPageAry[110]="";
vlanPageAry[111]="";
vlanPageAry[112]="";
vlanPageAry[113]="";
vlanPageAry[114]="";
vlanPageAry[115]="";
vlanPageAry[116]="";
vlanPageAry[117]="";
vlanPageAry[118]="";
vlanPageAry[119]="";
vlanPageAry[120]="";
vlanPageAry[121]="";
vlanPageAry[122]="";
vlanPageAry[123]="";
vlanPageAry[124]="";
vlanPageAry[125]="";
vlanPageAry[126]="";
vlanPageAry[127]="";
vlanPageAry[128]="";
vlanPageAry[129]="";
vlanPageAry[130]="";
vlanPageAry[131]="";
vlanPageAry[132]="";
vlanPageAry[133]="";
vlanPageAry[134]="";
vlanPageAry[135]="";
vlanPageAry[136]="";
vlanPageAry[137]="";
vlanPageAry[138]="";
vlanPageAry[139]="";
vlanPageAry[140]="";
vlanPageAry[141]="";
vlanPageAry[142]="";
vlanPageAry[143]="";
vlanPageAry[144]="";
vlanPageAry[145]="";
vlanPageAry[146]="";
vlanPageAry[147]="";
vlanPageAry[148]="";
vlanPageAry[149]="";
vlanPageAry[150]="";
vlanPageAry[151]="";
vlanPageAry[152]="";
vlanPageAry[153]="";
vlanPageAry[154]="";
vlanPageAry[155]="";
vlanPageAry[156]="";
vlanPageAry[157]="";
vlanPageAry[158]="";
vlanPageAry[159]="";
vlanPageAry[160]="";
vlanPageAry[161]="";
vlanPageAry[162]="";
vlanPageAry[163]="";
vlanPageAry[164]="";
vlanPageAry[165]="";
vlanPageAry[166]="";
vlanPageAry[167]="";
vlanPageAry[168]="";
vlanPageAry[169]="";
vlanPageAry[170]="";
vlanPageAry[171]="";
vlanPageAry[172]="";
vlanPageAry[173]="";
vlanPageAry[174]="";
vlanPageAry[175]="";
vlanPageAry[176]="";
vlanPageAry[177]="";
vlanPageAry[178]="";
vlanPageAry[179]="";
vlanPageAry[180]="";
vlanPageAry[181]="";
vlanPageAry[182]="";
vlanPageAry[183]="";
vlanPageAry[184]="";
vlanPageAry[185]="";
vlanPageAry[186]="";
vlanPageAry[187]="";
vlanPageAry[188]="";
vlanPageAry[189]="";
vlanPageAry[190]="";
vlanPageAry[191]="";
vlanPageAry[192]="";
vlanPageAry[193]="";
vlanPageAry[194]="";
vlanPageAry[195]="";
vlanPageAry[196]="";
vlanPageAry[197]="";
vlanPageAry[198]="";
vlanPageAry[199]="";
vlanPageAry[200]="";
vlanPageAry[201]="";
vlanPageAry[202]="";
vlanPageAry[203]="";
vlanPageAry[204]="";
vlanPageAry[205]="";
vlanPageAry[206]="";
vlanPageAry[207]="";
vlanPageAry[208]="";
vlanPageAry[209]="";
vlanPageAry[210]="";
vlanPageAry[211]="";
vlanPageAry[212]="";
vlanPageAry[213]="";
vlanPageAry[214]="";
vlanPageAry[215]="";
vlanPageAry[216]="";
vlanPageAry[217]="";
vlanPageAry[218]="";
vlanPageAry[219]="";
vlanPageAry[220]="";
vlanPageAry[221]="";
vlanPageAry[222]="";
vlanPageAry[223]="";
vlanPageAry[224]="";
vlanPageAry[225]="";
vlanPageAry[226]="";
vlanPageAry[227]="";
vlanPageAry[228]="";
vlanPageAry[229]="";
vlanPageAry[230]="";
vlanPageAry[231]="";
vlanPageAry[232]="";
vlanPageAry[233]="";
vlanPageAry[234]="";
vlanPageAry[235]="";
vlanPageAry[236]="";
vlanPageAry[237]="";
vlanPageAry[238]="";
vlanPageAry[239]="";
vlanPageAry[240]="";
vlanPageAry[241]="";
vlanPageAry[242]="";
vlanPageAry[243]="";
vlanPageAry[244]="";
vlanPageAry[245]="";
vlanPageAry[246]="";
vlanPageAry[247]="";
vlanPageAry[248]="";
vlanPageAry[249]="";
vlanPageAry[250]="";
vlanPageAry[251]="";
vlanPageAry[252]="";
vlanPageAry[253]="";
vlanPageAry[254]="";
vlanPageAry[255]="";
vlanPageAry[256]="";
vlanPageAry[257]="";
vlanPageAry[258]="";
vlanPageAry[259]="";
vlanPageAry[260]="";
vlanPageAry[261]="";
vlanPageAry[262]="";
vlanPageAry[263]="";
vlanPageAry[264]="";
vlanPageAry[265]="";
vlanPageAry[266]="";
vlanPageAry[267]="";
vlanPageAry[268]="";
vlanPageAry[269]="";
vlanPageAry[270]="";
vlanPageAry[271]="";
vlanPageAry[272]="";
vlanPageAry[273]="";
vlanPageAry[274]="";
vlanPageAry[275]="";
vlanPageAry[276]="";
vlanPageAry[277]="";
vlanPageAry[278]="";
vlanPageAry[279]="";
vlanPageAry[280]="";
vlanPageAry[281]="";
vlanPageAry[282]="";
vlanPageAry[283]="";
vlanPageAry[284]="";
vlanPageAry[285]="";
vlanPageAry[286]="";
vlanPageAry[287]="";
vlanPageAry[288]="";
vlanPageAry[289]="";
vlanPageAry[290]="";
vlanPageAry[291]="";
vlanPageAry[292]="";
vlanPageAry[293]="";
vlanPageAry[294]="";
vlanPageAry[295]="";
vlanPageAry[296]="";
vlanPageAry[297]="";
vlanPageAry[298]="";
vlanPageAry[299]="";
vlanPageAry[300]="";

/********************  IP外置登陆对应配置  ********************/
var ipPageAry = new Array(301);// 空表示未使用
/*
* 字段定义:名称|起始IP|结束IP|虚拟商号|重定向地址|审核标记|认证方式|操作员
* 起始IP(调整):以;分隔,与结束IP组成多IP段,要求一一对应,因终端可能只有IPV6地址,导致获取到的IPV4为000.000.000.000,故允许0.0.0.0的录入
* 结束IP(调整):以;分隔
* 举例:起始IP为"1.1.1.1;2.2.2.2",结束IP为"1.1.1.100;2.2.2.200",则代表1.1.1.1-1.1.1.100和2.2.2.2-2.2.2.200两个IP段
* 虚拟商号(调整):配置@xxx方式直接作为后缀时,发送短信使用机身编号;配置私有云审核的虚拟商号则取后四位作为后缀,发送短信直接使用其作为机身编号
* 审核标记:0-未审核;1-审核通过;2-审核拒绝
* 认证方式:0-本地认证;1-PORTAL协议;2-Ruckus;3-Cisco;4-Moto;5-JUNIPER(暂未实现);6-Aruba6.4.2.2;7-Aruba旧版本
* 保存数据格式:默认模版|1.1.1.1;2.2.2.2|1.1.1.100;2.2.2.200|http://www.baidu.com|1|0|admin;11
*/
ipPageAry[0]="默认模版|0.0.0.0|255.255.255.255|||1|0|";
ipPageAry[1]="ntdx|0.0.0.0|255.255.255.255|||0|1|admin";
ipPageAry[2]="ntdx-new|0.0.0.0|255.255.255.255|||1|1|admin";
ipPageAry[3]="";
ipPageAry[4]="";
ipPageAry[5]="";
ipPageAry[6]="";
ipPageAry[7]="";
ipPageAry[8]="";
ipPageAry[9]="";
ipPageAry[10]="";
ipPageAry[11]="";
ipPageAry[12]="";
ipPageAry[13]="";
ipPageAry[14]="";
ipPageAry[15]="";
ipPageAry[16]="";
ipPageAry[17]="";
ipPageAry[18]="";
ipPageAry[19]="";
ipPageAry[20]="";
ipPageAry[21]="";
ipPageAry[22]="";
ipPageAry[23]="";
ipPageAry[24]="";
ipPageAry[25]="";
ipPageAry[26]="";
ipPageAry[27]="";
ipPageAry[28]="";
ipPageAry[29]="";
ipPageAry[30]="";
ipPageAry[31]="";
ipPageAry[32]="";
ipPageAry[33]="";
ipPageAry[34]="";
ipPageAry[35]="";
ipPageAry[36]="";
ipPageAry[37]="";
ipPageAry[38]="";
ipPageAry[39]="";
ipPageAry[40]="";
ipPageAry[41]="";
ipPageAry[42]="";
ipPageAry[43]="";
ipPageAry[44]="";
ipPageAry[45]="";
ipPageAry[46]="";
ipPageAry[47]="";
ipPageAry[48]="";
ipPageAry[49]="";
ipPageAry[50]="";
ipPageAry[51]="";
ipPageAry[52]="";
ipPageAry[53]="";
ipPageAry[54]="";
ipPageAry[55]="";
ipPageAry[56]="";
ipPageAry[57]="";
ipPageAry[58]="";
ipPageAry[59]="";
ipPageAry[60]="";
ipPageAry[61]="";
ipPageAry[62]="";
ipPageAry[63]="";
ipPageAry[64]="";
ipPageAry[65]="";
ipPageAry[66]="";
ipPageAry[67]="";
ipPageAry[68]="";
ipPageAry[69]="";
ipPageAry[70]="";
ipPageAry[71]="";
ipPageAry[72]="";
ipPageAry[73]="";
ipPageAry[74]="";
ipPageAry[75]="";
ipPageAry[76]="";
ipPageAry[77]="";
ipPageAry[78]="";
ipPageAry[79]="";
ipPageAry[80]="";
ipPageAry[81]="";
ipPageAry[82]="";
ipPageAry[83]="";
ipPageAry[84]="";
ipPageAry[85]="";
ipPageAry[86]="";
ipPageAry[87]="";
ipPageAry[88]="";
ipPageAry[89]="";
ipPageAry[90]="";
ipPageAry[91]="";
ipPageAry[92]="";
ipPageAry[93]="";
ipPageAry[94]="";
ipPageAry[95]="";
ipPageAry[96]="";
ipPageAry[97]="";
ipPageAry[98]="";
ipPageAry[99]="";
ipPageAry[100]="";
ipPageAry[101]="";
ipPageAry[102]="";
ipPageAry[103]="";
ipPageAry[104]="";
ipPageAry[105]="";
ipPageAry[106]="";
ipPageAry[107]="";
ipPageAry[108]="";
ipPageAry[109]="";
ipPageAry[110]="";
ipPageAry[111]="";
ipPageAry[112]="";
ipPageAry[113]="";
ipPageAry[114]="";
ipPageAry[115]="";
ipPageAry[116]="";
ipPageAry[117]="";
ipPageAry[118]="";
ipPageAry[119]="";
ipPageAry[120]="";
ipPageAry[121]="";
ipPageAry[122]="";
ipPageAry[123]="";
ipPageAry[124]="";
ipPageAry[125]="";
ipPageAry[126]="";
ipPageAry[127]="";
ipPageAry[128]="";
ipPageAry[129]="";
ipPageAry[130]="";
ipPageAry[131]="";
ipPageAry[132]="";
ipPageAry[133]="";
ipPageAry[134]="";
ipPageAry[135]="";
ipPageAry[136]="";
ipPageAry[137]="";
ipPageAry[138]="";
ipPageAry[139]="";
ipPageAry[140]="";
ipPageAry[141]="";
ipPageAry[142]="";
ipPageAry[143]="";
ipPageAry[144]="";
ipPageAry[145]="";
ipPageAry[146]="";
ipPageAry[147]="";
ipPageAry[148]="";
ipPageAry[149]="";
ipPageAry[150]="";
ipPageAry[151]="";
ipPageAry[152]="";
ipPageAry[153]="";
ipPageAry[154]="";
ipPageAry[155]="";
ipPageAry[156]="";
ipPageAry[157]="";
ipPageAry[158]="";
ipPageAry[159]="";
ipPageAry[160]="";
ipPageAry[161]="";
ipPageAry[162]="";
ipPageAry[163]="";
ipPageAry[164]="";
ipPageAry[165]="";
ipPageAry[166]="";
ipPageAry[167]="";
ipPageAry[168]="";
ipPageAry[169]="";
ipPageAry[170]="";
ipPageAry[171]="";
ipPageAry[172]="";
ipPageAry[173]="";
ipPageAry[174]="";
ipPageAry[175]="";
ipPageAry[176]="";
ipPageAry[177]="";
ipPageAry[178]="";
ipPageAry[179]="";
ipPageAry[180]="";
ipPageAry[181]="";
ipPageAry[182]="";
ipPageAry[183]="";
ipPageAry[184]="";
ipPageAry[185]="";
ipPageAry[186]="";
ipPageAry[187]="";
ipPageAry[188]="";
ipPageAry[189]="";
ipPageAry[190]="";
ipPageAry[191]="";
ipPageAry[192]="";
ipPageAry[193]="";
ipPageAry[194]="";
ipPageAry[195]="";
ipPageAry[196]="";
ipPageAry[197]="";
ipPageAry[198]="";
ipPageAry[199]="";
ipPageAry[200]="";
ipPageAry[201]="";
ipPageAry[202]="";
ipPageAry[203]="";
ipPageAry[204]="";
ipPageAry[205]="";
ipPageAry[206]="";
ipPageAry[207]="";
ipPageAry[208]="";
ipPageAry[209]="";
ipPageAry[210]="";
ipPageAry[211]="";
ipPageAry[212]="";
ipPageAry[213]="";
ipPageAry[214]="";
ipPageAry[215]="";
ipPageAry[216]="";
ipPageAry[217]="";
ipPageAry[218]="";
ipPageAry[219]="";
ipPageAry[220]="";
ipPageAry[221]="";
ipPageAry[222]="";
ipPageAry[223]="";
ipPageAry[224]="";
ipPageAry[225]="";
ipPageAry[226]="";
ipPageAry[227]="";
ipPageAry[228]="";
ipPageAry[229]="";
ipPageAry[230]="";
ipPageAry[231]="";
ipPageAry[232]="";
ipPageAry[233]="";
ipPageAry[234]="";
ipPageAry[235]="";
ipPageAry[236]="";
ipPageAry[237]="";
ipPageAry[238]="";
ipPageAry[239]="";
ipPageAry[240]="";
ipPageAry[241]="";
ipPageAry[242]="";
ipPageAry[243]="";
ipPageAry[244]="";
ipPageAry[245]="";
ipPageAry[246]="";
ipPageAry[247]="";
ipPageAry[248]="";
ipPageAry[249]="";
ipPageAry[250]="";
ipPageAry[251]="";
ipPageAry[252]="";
ipPageAry[253]="";
ipPageAry[254]="";
ipPageAry[255]="";
ipPageAry[256]="";
ipPageAry[257]="";
ipPageAry[258]="";
ipPageAry[259]="";
ipPageAry[260]="";
ipPageAry[261]="";
ipPageAry[262]="";
ipPageAry[263]="";
ipPageAry[264]="";
ipPageAry[265]="";
ipPageAry[266]="";
ipPageAry[267]="";
ipPageAry[268]="";
ipPageAry[269]="";
ipPageAry[270]="";
ipPageAry[271]="";
ipPageAry[272]="";
ipPageAry[273]="";
ipPageAry[274]="";
ipPageAry[275]="";
ipPageAry[276]="";
ipPageAry[277]="";
ipPageAry[278]="";
ipPageAry[279]="";
ipPageAry[280]="";
ipPageAry[281]="";
ipPageAry[282]="";
ipPageAry[283]="";
ipPageAry[284]="";
ipPageAry[285]="";
ipPageAry[286]="";
ipPageAry[287]="";
ipPageAry[288]="";
ipPageAry[289]="";
ipPageAry[290]="";
ipPageAry[291]="";
ipPageAry[292]="";
ipPageAry[293]="";
ipPageAry[294]="";
ipPageAry[295]="";
ipPageAry[296]="";
ipPageAry[297]="";
ipPageAry[298]="";
ipPageAry[299]="";
ipPageAry[300]="";

/********************  AREAID外置登陆对应配置  ********************/
var areaIDPageAry = new Array(301);// 空表示未使用
/*
* 字段定义:名称|多AREA段|虚拟商号|重定向地址|审核标记|认证方式|操作员
* AREA说明(调整):多AREA段以;分隔,要求支持中文和特殊符号
* 虚拟商号(调整):配置@xxx方式直接作为后缀时,发送短信使用机身编号;配置私有云审核的虚拟商号则取后四位作为后缀,发送短信直接使用其作为机身编号
* 审核标记:0-未审核;1-审核通过;2-审核拒绝
* 认证方式:0-本地认证;1-PORTAL协议;2-Ruckus;3-Cisco;4-Moto;5-JUNIPER(暂未实现);6-Aruba6.4.2.2;7-Aruba旧版本
* 保存数据格式:默认模版|北京;上海;广州|@123|http://www.baidu.com|1|0|0|0|admin;11
*/
areaIDPageAry[0]="默认模版|000|||1|0|";
areaIDPageAry[1]="";
areaIDPageAry[2]="";
areaIDPageAry[3]="";
areaIDPageAry[4]="";
areaIDPageAry[5]="";
areaIDPageAry[6]="";
areaIDPageAry[7]="";
areaIDPageAry[8]="";
areaIDPageAry[9]="";
areaIDPageAry[10]="";
areaIDPageAry[11]="";
areaIDPageAry[12]="";
areaIDPageAry[13]="";
areaIDPageAry[14]="";
areaIDPageAry[15]="";
areaIDPageAry[16]="";
areaIDPageAry[17]="";
areaIDPageAry[18]="";
areaIDPageAry[19]="";
areaIDPageAry[20]="";
areaIDPageAry[21]="";
areaIDPageAry[22]="";
areaIDPageAry[23]="";
areaIDPageAry[24]="";
areaIDPageAry[25]="";
areaIDPageAry[26]="";
areaIDPageAry[27]="";
areaIDPageAry[28]="";
areaIDPageAry[29]="";
areaIDPageAry[30]="";
areaIDPageAry[31]="";
areaIDPageAry[32]="";
areaIDPageAry[33]="";
areaIDPageAry[34]="";
areaIDPageAry[35]="";
areaIDPageAry[36]="";
areaIDPageAry[37]="";
areaIDPageAry[38]="";
areaIDPageAry[39]="";
areaIDPageAry[40]="";
areaIDPageAry[41]="";
areaIDPageAry[42]="";
areaIDPageAry[43]="";
areaIDPageAry[44]="";
areaIDPageAry[45]="";
areaIDPageAry[46]="";
areaIDPageAry[47]="";
areaIDPageAry[48]="";
areaIDPageAry[49]="";
areaIDPageAry[50]="";
areaIDPageAry[51]="";
areaIDPageAry[52]="";
areaIDPageAry[53]="";
areaIDPageAry[54]="";
areaIDPageAry[55]="";
areaIDPageAry[56]="";
areaIDPageAry[57]="";
areaIDPageAry[58]="";
areaIDPageAry[59]="";
areaIDPageAry[60]="";
areaIDPageAry[61]="";
areaIDPageAry[62]="";
areaIDPageAry[63]="";
areaIDPageAry[64]="";
areaIDPageAry[65]="";
areaIDPageAry[66]="";
areaIDPageAry[67]="";
areaIDPageAry[68]="";
areaIDPageAry[69]="";
areaIDPageAry[70]="";
areaIDPageAry[71]="";
areaIDPageAry[72]="";
areaIDPageAry[73]="";
areaIDPageAry[74]="";
areaIDPageAry[75]="";
areaIDPageAry[76]="";
areaIDPageAry[77]="";
areaIDPageAry[78]="";
areaIDPageAry[79]="";
areaIDPageAry[80]="";
areaIDPageAry[81]="";
areaIDPageAry[82]="";
areaIDPageAry[83]="";
areaIDPageAry[84]="";
areaIDPageAry[85]="";
areaIDPageAry[86]="";
areaIDPageAry[87]="";
areaIDPageAry[88]="";
areaIDPageAry[89]="";
areaIDPageAry[90]="";
areaIDPageAry[91]="";
areaIDPageAry[92]="";
areaIDPageAry[93]="";
areaIDPageAry[94]="";
areaIDPageAry[95]="";
areaIDPageAry[96]="";
areaIDPageAry[97]="";
areaIDPageAry[98]="";
areaIDPageAry[99]="";
areaIDPageAry[100]="";
areaIDPageAry[101]="";
areaIDPageAry[102]="";
areaIDPageAry[103]="";
areaIDPageAry[104]="";
areaIDPageAry[105]="";
areaIDPageAry[106]="";
areaIDPageAry[107]="";
areaIDPageAry[108]="";
areaIDPageAry[109]="";
areaIDPageAry[110]="";
areaIDPageAry[111]="";
areaIDPageAry[112]="";
areaIDPageAry[113]="";
areaIDPageAry[114]="";
areaIDPageAry[115]="";
areaIDPageAry[116]="";
areaIDPageAry[117]="";
areaIDPageAry[118]="";
areaIDPageAry[119]="";
areaIDPageAry[120]="";
areaIDPageAry[121]="";
areaIDPageAry[122]="";
areaIDPageAry[123]="";
areaIDPageAry[124]="";
areaIDPageAry[125]="";
areaIDPageAry[126]="";
areaIDPageAry[127]="";
areaIDPageAry[128]="";
areaIDPageAry[129]="";
areaIDPageAry[130]="";
areaIDPageAry[131]="";
areaIDPageAry[132]="";
areaIDPageAry[133]="";
areaIDPageAry[134]="";
areaIDPageAry[135]="";
areaIDPageAry[136]="";
areaIDPageAry[137]="";
areaIDPageAry[138]="";
areaIDPageAry[139]="";
areaIDPageAry[140]="";
areaIDPageAry[141]="";
areaIDPageAry[142]="";
areaIDPageAry[143]="";
areaIDPageAry[144]="";
areaIDPageAry[145]="";
areaIDPageAry[146]="";
areaIDPageAry[147]="";
areaIDPageAry[148]="";
areaIDPageAry[149]="";
areaIDPageAry[150]="";
areaIDPageAry[151]="";
areaIDPageAry[152]="";
areaIDPageAry[153]="";
areaIDPageAry[154]="";
areaIDPageAry[155]="";
areaIDPageAry[156]="";
areaIDPageAry[157]="";
areaIDPageAry[158]="";
areaIDPageAry[159]="";
areaIDPageAry[160]="";
areaIDPageAry[161]="";
areaIDPageAry[162]="";
areaIDPageAry[163]="";
areaIDPageAry[164]="";
areaIDPageAry[165]="";
areaIDPageAry[166]="";
areaIDPageAry[167]="";
areaIDPageAry[168]="";
areaIDPageAry[169]="";
areaIDPageAry[170]="";
areaIDPageAry[171]="";
areaIDPageAry[172]="";
areaIDPageAry[173]="";
areaIDPageAry[174]="";
areaIDPageAry[175]="";
areaIDPageAry[176]="";
areaIDPageAry[177]="";
areaIDPageAry[178]="";
areaIDPageAry[179]="";
areaIDPageAry[180]="";
areaIDPageAry[181]="";
areaIDPageAry[182]="";
areaIDPageAry[183]="";
areaIDPageAry[184]="";
areaIDPageAry[185]="";
areaIDPageAry[186]="";
areaIDPageAry[187]="";
areaIDPageAry[188]="";
areaIDPageAry[189]="";
areaIDPageAry[190]="";
areaIDPageAry[191]="";
areaIDPageAry[192]="";
areaIDPageAry[193]="";
areaIDPageAry[194]="";
areaIDPageAry[195]="";
areaIDPageAry[196]="";
areaIDPageAry[197]="";
areaIDPageAry[198]="";
areaIDPageAry[199]="";
areaIDPageAry[200]="";
areaIDPageAry[201]="";
areaIDPageAry[202]="";
areaIDPageAry[203]="";
areaIDPageAry[204]="";
areaIDPageAry[205]="";
areaIDPageAry[206]="";
areaIDPageAry[207]="";
areaIDPageAry[208]="";
areaIDPageAry[209]="";
areaIDPageAry[210]="";
areaIDPageAry[211]="";
areaIDPageAry[212]="";
areaIDPageAry[213]="";
areaIDPageAry[214]="";
areaIDPageAry[215]="";
areaIDPageAry[216]="";
areaIDPageAry[217]="";
areaIDPageAry[218]="";
areaIDPageAry[219]="";
areaIDPageAry[220]="";
areaIDPageAry[221]="";
areaIDPageAry[222]="";
areaIDPageAry[223]="";
areaIDPageAry[224]="";
areaIDPageAry[225]="";
areaIDPageAry[226]="";
areaIDPageAry[227]="";
areaIDPageAry[228]="";
areaIDPageAry[229]="";
areaIDPageAry[230]="";
areaIDPageAry[231]="";
areaIDPageAry[232]="";
areaIDPageAry[233]="";
areaIDPageAry[234]="";
areaIDPageAry[235]="";
areaIDPageAry[236]="";
areaIDPageAry[237]="";
areaIDPageAry[238]="";
areaIDPageAry[239]="";
areaIDPageAry[240]="";
areaIDPageAry[241]="";
areaIDPageAry[242]="";
areaIDPageAry[243]="";
areaIDPageAry[244]="";
areaIDPageAry[245]="";
areaIDPageAry[246]="";
areaIDPageAry[247]="";
areaIDPageAry[248]="";
areaIDPageAry[249]="";
areaIDPageAry[250]="";
areaIDPageAry[251]="";
areaIDPageAry[252]="";
areaIDPageAry[253]="";
areaIDPageAry[254]="";
areaIDPageAry[255]="";
areaIDPageAry[256]="";
areaIDPageAry[257]="";
areaIDPageAry[258]="";
areaIDPageAry[259]="";
areaIDPageAry[260]="";
areaIDPageAry[261]="";
areaIDPageAry[262]="";
areaIDPageAry[263]="";
areaIDPageAry[264]="";
areaIDPageAry[265]="";
areaIDPageAry[266]="";
areaIDPageAry[267]="";
areaIDPageAry[268]="";
areaIDPageAry[269]="";
areaIDPageAry[270]="";
areaIDPageAry[271]="";
areaIDPageAry[272]="";
areaIDPageAry[273]="";
areaIDPageAry[274]="";
areaIDPageAry[275]="";
areaIDPageAry[276]="";
areaIDPageAry[277]="";
areaIDPageAry[278]="";
areaIDPageAry[279]="";
areaIDPageAry[280]="";
areaIDPageAry[281]="";
areaIDPageAry[282]="";
areaIDPageAry[283]="";
areaIDPageAry[284]="";
areaIDPageAry[285]="";
areaIDPageAry[286]="";
areaIDPageAry[287]="";
areaIDPageAry[288]="";
areaIDPageAry[289]="";
areaIDPageAry[290]="";
areaIDPageAry[291]="";
areaIDPageAry[292]="";
areaIDPageAry[293]="";
areaIDPageAry[294]="";
areaIDPageAry[295]="";
areaIDPageAry[296]="";
areaIDPageAry[297]="";
areaIDPageAry[298]="";
areaIDPageAry[299]="";
areaIDPageAry[300]="";

/********************  时间外置登陆对应配置  ********************/
var timePageAry = new Array(301);// 空表示未使用
/*
* 字段定义:名称|起始时间|结束时间|重定向地址|审核标记|认证方式|操作员
* 起始时间(调整):以;分隔,与结束时间组成多时间段,要求一一对应
* 结束时间(调整):以;分隔
* 举例:起始时间为"01:00:00;21:00:00",结束时间为"13:00:00;22:00:00",则代表01:00:00-13:00:00和21:00:00-22:00:00两个时间段
* 虚拟商号(调整):配置@xxx方式直接作为后缀时,发送短信使用机身编号;配置私有云审核的虚拟商号则取后四位作为后缀,发送短信直接使用其作为机身编号
* 审核标记:0-未审核;1-审核通过;2-审核拒绝
* 认证方式:0-本地认证;1-PORTAL协议;2-Ruckus;3-Cisco;4-Moto;5-JUN时间ER(暂未实现);6-Aruba6.4.2.2;7-Aruba旧版本
* 保存数据格式:默认模版|01:00:00;21:00:00|13:00:00;22:00:00|http://www.baidu.com|1|0|admin;11
*/
timePageAry[0]="默认模版|00:00:00|23:59:59|||1|0|";
timePageAry[1]="";
timePageAry[2]="";
timePageAry[3]="";
timePageAry[4]="";
timePageAry[5]="";
timePageAry[6]="";
timePageAry[7]="";
timePageAry[8]="";
timePageAry[9]="";
timePageAry[10]="";
timePageAry[11]="";
timePageAry[12]="";
timePageAry[13]="";
timePageAry[14]="";
timePageAry[15]="";
timePageAry[16]="";
timePageAry[17]="";
timePageAry[18]="";
timePageAry[19]="";
timePageAry[20]="";
timePageAry[21]="";
timePageAry[22]="";
timePageAry[23]="";
timePageAry[24]="";
timePageAry[25]="";
timePageAry[26]="";
timePageAry[27]="";
timePageAry[28]="";
timePageAry[29]="";
timePageAry[30]="";
timePageAry[31]="";
timePageAry[32]="";
timePageAry[33]="";
timePageAry[34]="";
timePageAry[35]="";
timePageAry[36]="";
timePageAry[37]="";
timePageAry[38]="";
timePageAry[39]="";
timePageAry[40]="";
timePageAry[41]="";
timePageAry[42]="";
timePageAry[43]="";
timePageAry[44]="";
timePageAry[45]="";
timePageAry[46]="";
timePageAry[47]="";
timePageAry[48]="";
timePageAry[49]="";
timePageAry[50]="";
timePageAry[51]="";
timePageAry[52]="";
timePageAry[53]="";
timePageAry[54]="";
timePageAry[55]="";
timePageAry[56]="";
timePageAry[57]="";
timePageAry[58]="";
timePageAry[59]="";
timePageAry[60]="";
timePageAry[61]="";
timePageAry[62]="";
timePageAry[63]="";
timePageAry[64]="";
timePageAry[65]="";
timePageAry[66]="";
timePageAry[67]="";
timePageAry[68]="";
timePageAry[69]="";
timePageAry[70]="";
timePageAry[71]="";
timePageAry[72]="";
timePageAry[73]="";
timePageAry[74]="";
timePageAry[75]="";
timePageAry[76]="";
timePageAry[77]="";
timePageAry[78]="";
timePageAry[79]="";
timePageAry[80]="";
timePageAry[81]="";
timePageAry[82]="";
timePageAry[83]="";
timePageAry[84]="";
timePageAry[85]="";
timePageAry[86]="";
timePageAry[87]="";
timePageAry[88]="";
timePageAry[89]="";
timePageAry[90]="";
timePageAry[91]="";
timePageAry[92]="";
timePageAry[93]="";
timePageAry[94]="";
timePageAry[95]="";
timePageAry[96]="";
timePageAry[97]="";
timePageAry[98]="";
timePageAry[99]="";
timePageAry[100]="";
timePageAry[101]="";
timePageAry[102]="";
timePageAry[103]="";
timePageAry[104]="";
timePageAry[105]="";
timePageAry[106]="";
timePageAry[107]="";
timePageAry[108]="";
timePageAry[109]="";
timePageAry[110]="";
timePageAry[111]="";
timePageAry[112]="";
timePageAry[113]="";
timePageAry[114]="";
timePageAry[115]="";
timePageAry[116]="";
timePageAry[117]="";
timePageAry[118]="";
timePageAry[119]="";
timePageAry[120]="";
timePageAry[121]="";
timePageAry[122]="";
timePageAry[123]="";
timePageAry[124]="";
timePageAry[125]="";
timePageAry[126]="";
timePageAry[127]="";
timePageAry[128]="";
timePageAry[129]="";
timePageAry[130]="";
timePageAry[131]="";
timePageAry[132]="";
timePageAry[133]="";
timePageAry[134]="";
timePageAry[135]="";
timePageAry[136]="";
timePageAry[137]="";
timePageAry[138]="";
timePageAry[139]="";
timePageAry[140]="";
timePageAry[141]="";
timePageAry[142]="";
timePageAry[143]="";
timePageAry[144]="";
timePageAry[145]="";
timePageAry[146]="";
timePageAry[147]="";
timePageAry[148]="";
timePageAry[149]="";
timePageAry[150]="";
timePageAry[151]="";
timePageAry[152]="";
timePageAry[153]="";
timePageAry[154]="";
timePageAry[155]="";
timePageAry[156]="";
timePageAry[157]="";
timePageAry[158]="";
timePageAry[159]="";
timePageAry[160]="";
timePageAry[161]="";
timePageAry[162]="";
timePageAry[163]="";
timePageAry[164]="";
timePageAry[165]="";
timePageAry[166]="";
timePageAry[167]="";
timePageAry[168]="";
timePageAry[169]="";
timePageAry[170]="";
timePageAry[171]="";
timePageAry[172]="";
timePageAry[173]="";
timePageAry[174]="";
timePageAry[175]="";
timePageAry[176]="";
timePageAry[177]="";
timePageAry[178]="";
timePageAry[179]="";
timePageAry[180]="";
timePageAry[181]="";
timePageAry[182]="";
timePageAry[183]="";
timePageAry[184]="";
timePageAry[185]="";
timePageAry[186]="";
timePageAry[187]="";
timePageAry[188]="";
timePageAry[189]="";
timePageAry[190]="";
timePageAry[191]="";
timePageAry[192]="";
timePageAry[193]="";
timePageAry[194]="";
timePageAry[195]="";
timePageAry[196]="";
timePageAry[197]="";
timePageAry[198]="";
timePageAry[199]="";
timePageAry[200]="";
timePageAry[201]="";
timePageAry[202]="";
timePageAry[203]="";
timePageAry[204]="";
timePageAry[205]="";
timePageAry[206]="";
timePageAry[207]="";
timePageAry[208]="";
timePageAry[209]="";
timePageAry[210]="";
timePageAry[211]="";
timePageAry[212]="";
timePageAry[213]="";
timePageAry[214]="";
timePageAry[215]="";
timePageAry[216]="";
timePageAry[217]="";
timePageAry[218]="";
timePageAry[219]="";
timePageAry[220]="";
timePageAry[221]="";
timePageAry[222]="";
timePageAry[223]="";
timePageAry[224]="";
timePageAry[225]="";
timePageAry[226]="";
timePageAry[227]="";
timePageAry[228]="";
timePageAry[229]="";
timePageAry[230]="";
timePageAry[231]="";
timePageAry[232]="";
timePageAry[233]="";
timePageAry[234]="";
timePageAry[235]="";
timePageAry[236]="";
timePageAry[237]="";
timePageAry[238]="";
timePageAry[239]="";
timePageAry[240]="";
timePageAry[241]="";
timePageAry[242]="";
timePageAry[243]="";
timePageAry[244]="";
timePageAry[245]="";
timePageAry[246]="";
timePageAry[247]="";
timePageAry[248]="";
timePageAry[249]="";
timePageAry[250]="";
timePageAry[251]="";
timePageAry[252]="";
timePageAry[253]="";
timePageAry[254]="";
timePageAry[255]="";
timePageAry[256]="";
timePageAry[257]="";
timePageAry[258]="";
timePageAry[259]="";
timePageAry[260]="";
timePageAry[261]="";
timePageAry[262]="";
timePageAry[263]="";
timePageAry[264]="";
timePageAry[265]="";
timePageAry[266]="";
timePageAry[267]="";
timePageAry[268]="";
timePageAry[269]="";
timePageAry[270]="";
timePageAry[271]="";
timePageAry[272]="";
timePageAry[273]="";
timePageAry[274]="";
timePageAry[275]="";
timePageAry[276]="";
timePageAry[277]="";
timePageAry[278]="";
timePageAry[279]="";
timePageAry[280]="";
timePageAry[281]="";
timePageAry[282]="";
timePageAry[283]="";
timePageAry[284]="";
timePageAry[285]="";
timePageAry[286]="";
timePageAry[287]="";
timePageAry[288]="";
timePageAry[289]="";
timePageAry[290]="";
timePageAry[291]="";
timePageAry[292]="";
timePageAry[293]="";
timePageAry[294]="";
timePageAry[295]="";
timePageAry[296]="";
timePageAry[297]="";
timePageAry[298]="";
timePageAry[299]="";
timePageAry[300]="";

/********************  IPV6外置登陆对应配置  ********************/
var ipv6PageAry = new Array(301);// 空表示未使用
/*
* 字段定义:名称|起始IPV6|结束IPV6|重定向地址|审核标记|认证方式|操作员
* 起始IPV6(调整):以;分隔,与结束IPV6组成多IPV6段,要求一一对应
* 结束IPV6(调整):以;分隔
* 举例:起始IPV6为"ABCD:EF01:2345:6789:ABCD:EF01:2345:1000;ABCD:EF01:2345:6789:ABCD:EF01:2345:3000",结束IPV6为"ABCD:EF01:2345:6789:ABCD:EF01:2345:2000;ABCD:EF01:2345:6789:ABCD:EF01:2345:4000",则代表ABCD:EF01:2345:6789:ABCD:EF01:2345:1000-ABCD:EF01:2345:6789:ABCD:EF01:2345:1000;ABCD:EF01:2345:6789:ABCD:EF01:2345:2000和ABCD:EF01:2345:6789:ABCD:EF01:2345:1000;ABCD:EF01:2345:6789:ABCD:EF01:2345:3000-ABCD:EF01:2345:6789:ABCD:EF01:2345:1000;ABCD:EF01:2345:6789:ABCD:EF01:2345:4000两个IPV6段
* 虚拟商号(调整):配置@xxx方式直接作为后缀时,发送短信使用机身编号;配置私有云审核的虚拟商号则取后四位作为后缀,发送短信直接使用其作为机身编号
* 审核标记:0-未审核;1-审核通过;2-审核拒绝
* 认证方式:0-本地认证;1-PORTAL协议;2-Ruckus;3-Cisco;4-Moto;5-JUNIPV6ER(暂未实现);6-Aruba6.4.2.2;7-Aruba旧版本
* 保存数据格式:默认模版|ABCD:EF01:2345:6789:ABCD:EF01:2345:1000;ABCD:EF01:2345:6789:ABCD:EF01:2345:3000|ABCD:EF01:2345:6789:ABCD:EF01:2345:2000;ABCD:EF01:2345:6789:ABCD:EF01:2345:4000|http://www.baidu.com|1|0|admin;11
*/
ipv6PageAry[0]="默认模版|0000:0000:0000:0000:0000:0000:0000:0000|FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF|||1|0|";
ipv6PageAry[1]="";
ipv6PageAry[2]="";
ipv6PageAry[3]="";
ipv6PageAry[4]="";
ipv6PageAry[5]="";
ipv6PageAry[6]="";
ipv6PageAry[7]="";
ipv6PageAry[8]="";
ipv6PageAry[9]="";
ipv6PageAry[10]="";
ipv6PageAry[11]="";
ipv6PageAry[12]="";
ipv6PageAry[13]="";
ipv6PageAry[14]="";
ipv6PageAry[15]="";
ipv6PageAry[16]="";
ipv6PageAry[17]="";
ipv6PageAry[18]="";
ipv6PageAry[19]="";
ipv6PageAry[20]="";
ipv6PageAry[21]="";
ipv6PageAry[22]="";
ipv6PageAry[23]="";
ipv6PageAry[24]="";
ipv6PageAry[25]="";
ipv6PageAry[26]="";
ipv6PageAry[27]="";
ipv6PageAry[28]="";
ipv6PageAry[29]="";
ipv6PageAry[30]="";
ipv6PageAry[31]="";
ipv6PageAry[32]="";
ipv6PageAry[33]="";
ipv6PageAry[34]="";
ipv6PageAry[35]="";
ipv6PageAry[36]="";
ipv6PageAry[37]="";
ipv6PageAry[38]="";
ipv6PageAry[39]="";
ipv6PageAry[40]="";
ipv6PageAry[41]="";
ipv6PageAry[42]="";
ipv6PageAry[43]="";
ipv6PageAry[44]="";
ipv6PageAry[45]="";
ipv6PageAry[46]="";
ipv6PageAry[47]="";
ipv6PageAry[48]="";
ipv6PageAry[49]="";
ipv6PageAry[50]="";
ipv6PageAry[51]="";
ipv6PageAry[52]="";
ipv6PageAry[53]="";
ipv6PageAry[54]="";
ipv6PageAry[55]="";
ipv6PageAry[56]="";
ipv6PageAry[57]="";
ipv6PageAry[58]="";
ipv6PageAry[59]="";
ipv6PageAry[60]="";
ipv6PageAry[61]="";
ipv6PageAry[62]="";
ipv6PageAry[63]="";
ipv6PageAry[64]="";
ipv6PageAry[65]="";
ipv6PageAry[66]="";
ipv6PageAry[67]="";
ipv6PageAry[68]="";
ipv6PageAry[69]="";
ipv6PageAry[70]="";
ipv6PageAry[71]="";
ipv6PageAry[72]="";
ipv6PageAry[73]="";
ipv6PageAry[74]="";
ipv6PageAry[75]="";
ipv6PageAry[76]="";
ipv6PageAry[77]="";
ipv6PageAry[78]="";
ipv6PageAry[79]="";
ipv6PageAry[80]="";
ipv6PageAry[81]="";
ipv6PageAry[82]="";
ipv6PageAry[83]="";
ipv6PageAry[84]="";
ipv6PageAry[85]="";
ipv6PageAry[86]="";
ipv6PageAry[87]="";
ipv6PageAry[88]="";
ipv6PageAry[89]="";
ipv6PageAry[90]="";
ipv6PageAry[91]="";
ipv6PageAry[92]="";
ipv6PageAry[93]="";
ipv6PageAry[94]="";
ipv6PageAry[95]="";
ipv6PageAry[96]="";
ipv6PageAry[97]="";
ipv6PageAry[98]="";
ipv6PageAry[99]="";
ipv6PageAry[100]="";
ipv6PageAry[101]="";
ipv6PageAry[102]="";
ipv6PageAry[103]="";
ipv6PageAry[104]="";
ipv6PageAry[105]="";
ipv6PageAry[106]="";
ipv6PageAry[107]="";
ipv6PageAry[108]="";
ipv6PageAry[109]="";
ipv6PageAry[110]="";
ipv6PageAry[111]="";
ipv6PageAry[112]="";
ipv6PageAry[113]="";
ipv6PageAry[114]="";
ipv6PageAry[115]="";
ipv6PageAry[116]="";
ipv6PageAry[117]="";
ipv6PageAry[118]="";
ipv6PageAry[119]="";
ipv6PageAry[120]="";
ipv6PageAry[121]="";
ipv6PageAry[122]="";
ipv6PageAry[123]="";
ipv6PageAry[124]="";
ipv6PageAry[125]="";
ipv6PageAry[126]="";
ipv6PageAry[127]="";
ipv6PageAry[128]="";
ipv6PageAry[129]="";
ipv6PageAry[130]="";
ipv6PageAry[131]="";
ipv6PageAry[132]="";
ipv6PageAry[133]="";
ipv6PageAry[134]="";
ipv6PageAry[135]="";
ipv6PageAry[136]="";
ipv6PageAry[137]="";
ipv6PageAry[138]="";
ipv6PageAry[139]="";
ipv6PageAry[140]="";
ipv6PageAry[141]="";
ipv6PageAry[142]="";
ipv6PageAry[143]="";
ipv6PageAry[144]="";
ipv6PageAry[145]="";
ipv6PageAry[146]="";
ipv6PageAry[147]="";
ipv6PageAry[148]="";
ipv6PageAry[149]="";
ipv6PageAry[150]="";
ipv6PageAry[151]="";
ipv6PageAry[152]="";
ipv6PageAry[153]="";
ipv6PageAry[154]="";
ipv6PageAry[155]="";
ipv6PageAry[156]="";
ipv6PageAry[157]="";
ipv6PageAry[158]="";
ipv6PageAry[159]="";
ipv6PageAry[160]="";
ipv6PageAry[161]="";
ipv6PageAry[162]="";
ipv6PageAry[163]="";
ipv6PageAry[164]="";
ipv6PageAry[165]="";
ipv6PageAry[166]="";
ipv6PageAry[167]="";
ipv6PageAry[168]="";
ipv6PageAry[169]="";
ipv6PageAry[170]="";
ipv6PageAry[171]="";
ipv6PageAry[172]="";
ipv6PageAry[173]="";
ipv6PageAry[174]="";
ipv6PageAry[175]="";
ipv6PageAry[176]="";
ipv6PageAry[177]="";
ipv6PageAry[178]="";
ipv6PageAry[179]="";
ipv6PageAry[180]="";
ipv6PageAry[181]="";
ipv6PageAry[182]="";
ipv6PageAry[183]="";
ipv6PageAry[184]="";
ipv6PageAry[185]="";
ipv6PageAry[186]="";
ipv6PageAry[187]="";
ipv6PageAry[188]="";
ipv6PageAry[189]="";
ipv6PageAry[190]="";
ipv6PageAry[191]="";
ipv6PageAry[192]="";
ipv6PageAry[193]="";
ipv6PageAry[194]="";
ipv6PageAry[195]="";
ipv6PageAry[196]="";
ipv6PageAry[197]="";
ipv6PageAry[198]="";
ipv6PageAry[199]="";
ipv6PageAry[200]="";
ipv6PageAry[201]="";
ipv6PageAry[202]="";
ipv6PageAry[203]="";
ipv6PageAry[204]="";
ipv6PageAry[205]="";
ipv6PageAry[206]="";
ipv6PageAry[207]="";
ipv6PageAry[208]="";
ipv6PageAry[209]="";
ipv6PageAry[210]="";
ipv6PageAry[211]="";
ipv6PageAry[212]="";
ipv6PageAry[213]="";
ipv6PageAry[214]="";
ipv6PageAry[215]="";
ipv6PageAry[216]="";
ipv6PageAry[217]="";
ipv6PageAry[218]="";
ipv6PageAry[219]="";
ipv6PageAry[220]="";
ipv6PageAry[221]="";
ipv6PageAry[222]="";
ipv6PageAry[223]="";
ipv6PageAry[224]="";
ipv6PageAry[225]="";
ipv6PageAry[226]="";
ipv6PageAry[227]="";
ipv6PageAry[228]="";
ipv6PageAry[229]="";
ipv6PageAry[230]="";
ipv6PageAry[231]="";
ipv6PageAry[232]="";
ipv6PageAry[233]="";
ipv6PageAry[234]="";
ipv6PageAry[235]="";
ipv6PageAry[236]="";
ipv6PageAry[237]="";
ipv6PageAry[238]="";
ipv6PageAry[239]="";
ipv6PageAry[240]="";
ipv6PageAry[241]="";
ipv6PageAry[242]="";
ipv6PageAry[243]="";
ipv6PageAry[244]="";
ipv6PageAry[245]="";
ipv6PageAry[246]="";
ipv6PageAry[247]="";
ipv6PageAry[248]="";
ipv6PageAry[249]="";
ipv6PageAry[250]="";
ipv6PageAry[251]="";
ipv6PageAry[252]="";
ipv6PageAry[253]="";
ipv6PageAry[254]="";
ipv6PageAry[255]="";
ipv6PageAry[256]="";
ipv6PageAry[257]="";
ipv6PageAry[258]="";
ipv6PageAry[259]="";
ipv6PageAry[260]="";
ipv6PageAry[261]="";
ipv6PageAry[262]="";
ipv6PageAry[263]="";
ipv6PageAry[264]="";
ipv6PageAry[265]="";
ipv6PageAry[266]="";
ipv6PageAry[267]="";
ipv6PageAry[268]="";
ipv6PageAry[269]="";
ipv6PageAry[270]="";
ipv6PageAry[271]="";
ipv6PageAry[272]="";
ipv6PageAry[273]="";
ipv6PageAry[274]="";
ipv6PageAry[275]="";
ipv6PageAry[276]="";
ipv6PageAry[277]="";
ipv6PageAry[278]="";
ipv6PageAry[279]="";
ipv6PageAry[280]="";
ipv6PageAry[281]="";
ipv6PageAry[282]="";
ipv6PageAry[283]="";
ipv6PageAry[284]="";
ipv6PageAry[285]="";
ipv6PageAry[286]="";
ipv6PageAry[287]="";
ipv6PageAry[288]="";
ipv6PageAry[289]="";
ipv6PageAry[290]="";
ipv6PageAry[291]="";
ipv6PageAry[292]="";
ipv6PageAry[293]="";
ipv6PageAry[294]="";
ipv6PageAry[295]="";
ipv6PageAry[296]="";
ipv6PageAry[297]="";
ipv6PageAry[298]="";
ipv6PageAry[299]="";
ipv6PageAry[300]="";


//公用函数，帮助取得url的查询的各类参数的值，只需输入参数名就可以了
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return "";
}

//比较两个ip的大小,如果大于，返回1，等于返回0，小于返回-1
function compareIP(ipBegin, ipEnd){
    if(ipBegin == '' && ipEnd == '') return 0;
    var temp1 = ipBegin.split(".");
    var temp2 = ipEnd.split(".");
    for (var i = 0; i < 4; i++){
        if (parseInt(temp1[i]) > parseInt(temp2[i])){
            return 1;
        }
        else if (parseInt(temp1[i]) < parseInt(temp2[i])){
            return -1;
        }
    }
    return 0;
}

//比较两个ipv6的大小,如果大于，返回1，等于返回0，小于返回-1
function compareIPV6(ipBegin, ipEnd){
    if(ipBegin == '' && ipEnd == '') return 0;
    var temp1 = convert2CompleteIpV6(ipBegin).split(":");
    var temp2 = convert2CompleteIpV6(ipEnd).split(":");
    for(var i = 0; i < 8; i++){
        if(parseInt(temp1[i],16) > parseInt(temp2[i],16)){
            return 1;
        }
        else if(parseInt(temp1[i],16) < parseInt(temp2[i],16)){
            return -1;
        }
    }
    return 0;
}
//比较两个时间的大小,如果大于，返回1，等于返回0，小于返回-1
function compareTime(ipBegin, ipEnd){
    if(ipBegin == '' || ipEnd == '') return 0;

    var temp1 = ipBegin.split(":");
    var temp2 = ipEnd.split(":");
    for (var i = 0; i < 3; i++){
        if (parseInt(temp1[i]) > parseInt(temp2[i])){
            return 1;
        }
        else if (parseInt(temp1[i]) < parseInt(temp2[i])){
            return -1;
        }
    }
    return 0;
}
//将压缩格式的转换为常规的IPv6地址
function convert2CompleteIpV6(ip){
    var ipV6 = ip;
    var index = ip.indexOf("::");
    if(index > 0){
        var size = 8-(ip.split(":").length-1);
        var tmp = "";
        for(var i = 0; i < size; i++){
            tmp += ":0";
        }
        tmp += ":";
        ipV6 = ip.replace("::",tmp);
    }
    else if(index == 0){
        ipV6 = ip.replace("::","0:0:0:0:0:0:0:");
    }
    return ipV6;
}

//获取匹配页面编号--2018-4-14(增加多选段的判断;保留时间和ipv6的匹配方式)
function getMatchPage(vlanid, ip, ssid, areaID, time, ipv6, acmac){

    var tempMatchPage = 0;

    switch (pageSetting) {
        case 1: // VLANID匹配
            for(var i = 1; i < vlanPageAry.length; i++){
                if(vlanPageAry[i] == '') continue;

                var option_array = vlanPageAry[i].split("|");

                if(option_array[1] == '' || option_array[2] == ''){
                    alert("VLANID匹配有输入项为空");
                    return tempMatchPage;
                }

                var temp_arr = option_array[1].split(";");
                var temp_arr2 = option_array[2].split(";");
                if(temp_arr.length != temp_arr2.length){
                    alert("VLANID匹配输入项中起始VLAN与结束VLAN个数不一致");
                    return tempMatchPage;
                }

                for(var j = 0; j < temp_arr.length; j++){
                    if(parseInt(vlanid) >= parseInt(temp_arr[j]) && parseInt(vlanid) <= parseInt(temp_arr2[j]) && option_array[5] == '1'){
                        tempMatchPage = i;
                        break;
                    }
                }
                if(tempMatchPage != 0) break;
            }

            break;
        case 2: // IPV4匹配
            for(var i = 1; i < ipPageAry.length; i++){
                if(ipPageAry[i] == '') continue;

                var option_array = ipPageAry[i].split("|");

                if(option_array[1] == '' || option_array[2] == ''){
                    alert("IP匹配有输入项为空");
                    return tempMatchPage;
                }

                var temp_arr = option_array[1].split(";");
                var temp_arr2 = option_array[2].split(";");
                if(temp_arr.length != temp_arr2.length){
                    alert("IP匹配输入项中起始IP与结束IP个数不一致");
                    return tempMatchPage;
                }

                for(var j = 0; j < temp_arr.length; j++){
                    if(compareIP(ip, temp_arr[j]) >= 0 && compareIP(ip, temp_arr2[j]) <= 0 && option_array[5] == '1'){
                        tempMatchPage = i;
                        break;
                    }
                }
                if(tempMatchPage != 0) break;
            }

            break;
        case 3: // SSID匹配
            for(var i = 1; i < ssidPageAry.length; i++){
                if(ssidPageAry[i] == '') continue;

                var option_array = ssidPageAry[i].split("|");

                if(option_array[1] == ''){
                    alert("SSID匹配有输入项为空");
                    return tempMatchPage;
                }

                var temp_arr = option_array[1].split(";");

                for(var j = 0; j < temp_arr.length; j++){
                    if(ssid == temp_arr[j] && option_array[4] == '1'){
                        tempMatchPage = i;
                        break;
                    }
                }
                if(tempMatchPage != 0) break;
            }

            break;
        case 4: // 区域ID匹配
            for(var i = 1; i < areaIDPageAry.length; i++){
                if(areaIDPageAry[i] == '') continue;

                var option_array = areaIDPageAry[i].split("|");

                if(option_array[1] == ''){
                    alert("区域ID匹配有输入项为空");
                    return tempMatchPage;
                }

                var temp_arr = option_array[1].split(";");

                for(var j = 0; j < temp_arr.length; j++){
                    if(areaID == temp_arr[j] && option_array[4] == '1'){
                        tempMatchPage = i;
                        break;
                    }
                }
                if(tempMatchPage != 0) break;
            }

            break;
        case 5: // 时间匹配
            break;
        case 6: // IPV6匹配
            for(var i = 1; i < ipv6PageAry.length; i++){
                if(ipv6PageAry[i] == '') continue;

                var option_array = ipv6PageAry[i].split("|");

                if(option_array[1] == '' || option_array[2] == ''){
                    alert("IPV6匹配有输入项为空");
                    return tempMatchPage;
                }

                var temp_arr = option_array[1].split(";");
                var temp_arr2 = option_array[2].split(";");
                if(temp_arr.length != temp_arr2.length){
                    alert("IPV6匹配输入项中起始IP与结束IP个数不一致");
                    return tempMatchPage;
                }

                for(var j = 0; j < temp_arr.length; j++){
                    if(compareIPV6(ipv6, temp_arr[j]) >= 0 && compareIPV6(ipv6, temp_arr2[j]) <= 0 && option_array[5] == '1'){
                        tempMatchPage = i;
                        break;
                    }
                }
                if(tempMatchPage != 0) break;
            }

            break;

        case 7: // 多匹配方式
            for(var i = 1; i < manyPageAry.length; i++){
                if(manyPageAry[i] == '') continue;
                var option_array = manyPageAry[i].split("|");
                if(option_array[1] == '' || option_array[2] == ''){
                    alert("MANYID匹配有输入项为空");
                    return tempMatchPage;
                }
                // 获取起始段
                var temp_arr = option_array[1].split(";");
                // 获取结束段
                var temp_arr2 = option_array[2].split(";");
                var many_type = option_array[8].split(";");

                if(temp_arr.length != temp_arr2.length || temp_arr.length != many_type.length ){
                    alert("起始段与结束段个数不一致");
                    return tempMatchPage;
                }
                var manyPage = 0;
                for(var j = 0; j < many_type.length; j++){

                    if(many_type[j] == "1"){
                        if(parseInt(vlanid) >= parseInt(temp_arr[j]) && parseInt(vlanid) <= parseInt(temp_arr2[j]) && option_array[5] == '1'){
                            manyPage = 1;
                            continue;
                        }else{
                            manyPage = 0;
                        }
                    }else if(many_type[j] == "2"){
                        if(compareIP(ip, temp_arr[j]) >= 0 && compareIP(ip, temp_arr2[j]) <= 0 && option_array[5] == '1'){
                            manyPage = 1;
                            continue;
                        }else{
                            manyPage = 0;
                        }
                    }else if(many_type[j] == "3"){
                        if(ssid == temp_arr[j] && option_array[5] == '1'){
                            manyPage = 1;
                            continue;
                        }else{
                            manyPage = 0;
                        }
                    }else if(many_type[j] == "4"){
                        if(areaID == temp_arr[j] && option_array[5] == '1'){
                            manyPage = 1;
                            continue;
                        }else{
                            manyPage = 0;
                        }
                    }else if(many_type[j] == "5"){
                        if(compareTime(time, temp_arr[j]) > 0 && compareTime(time, temp_arr2[j]) < 0 && option_array[5] == '1'){
                            manyPage = 1;
                            continue;
                        }else{
                            manyPage = 0;
                        }

                    }else if(many_type[j] == "6"){
                        if(compareIPV6(ipv6, temp_arr[j]) >= 0 && compareIPV6(ipv6, temp_arr2[j]) <= 0 && option_array[5] == '1'){
                            manyPage = 1;
                            continue;
                        }else{
                            manyPage = 0;
                        }
                    }else if(many_type[j] == "7"){
                        if(acmac == temp_arr[j] && option_array[5] == '1'){
                            manyPage = 1;
                            continue;
                        }else{
                            manyPage = 0;
                        }
                    }
                    // 都不满足条件就终止循环
                    if( manyPage == 0){
                        break;
                    }
                }
                if(manyPage == 1){
                    tempMatchPage = i;
                }
                if(tempMatchPage != 0) break;
            }
            break;
        default:
    }

    return tempMatchPage;
}

//获取虚拟机器编号--2018-4-14(增加多选段的判断;保留时间和ipv6的匹配方式)
function getVirtualMachineno(machineno, pageIndex){
    var paraStr = '';
    if (pageSetting == 1) {
        paraStr = vlanPageAry[pageIndex];
    }
    else if (pageSetting == 2) {
        paraStr = ipPageAry[pageIndex];
    }
    else if(pageSetting == 3){
        paraStr = ssidPageAry[pageIndex];
    }
    else if(pageSetting == 4){
        paraStr = areaIDPageAry[pageIndex];
    }
    else if(pageSetting == 5){
        // 保留
        paraStr = timePageAry[pageIndex];
    }
    else if(pageSetting == 6){
        // 保留
        paraStr = ipv6PageAry[pageIndex];
    }
    else if(pageSetting == 7){
        // 保留
        paraStr = manyPageAry[pageIndex];
    }
    var paraArr = paraStr.split("|");

    var l=pageSetting == 7 ? paraArr.length-6 : paraArr.length-5;
    var tempMachineno = paraArr[l];
    if(tempMachineno == ''){
        return machineno;
    }else{
        return tempMachineno;
    }

}

//获取重定向地址--2018-4-14(增加多选段的判断;保留时间和ipv6的匹配方式)
function getRedirectLink(pageIndex){
    var paraStr="0";
    if (pageSetting == 1) {
        paraStr = vlanPageAry[pageIndex];
    }
    else if (pageSetting == 2) {
        paraStr = ipPageAry[pageIndex];
    }
    else if(pageSetting == 3){
        paraStr = ssidPageAry[pageIndex];
    }
    else if(pageSetting == 4){
        paraStr = areaIDPageAry[pageIndex];
    }
    else if(pageSetting == 5){
        // 保留
        paraStr = timePageAry[pageIndex];
    }
    else if(pageSetting == 6){
        // 保留
        paraStr = ipv6PageAry[pageIndex];
    }
    else if(pageSetting == 7){
        // 保留
        paraStr = manyPageAry[pageIndex];
    }
    var paraArr = paraStr.split("|");

    var l=pageSetting == 7 ? paraArr.length-5 : paraArr.length-4;
    return paraArr[l];
}

//获取当前的匹配类型：vlan | ssid | ip
function getPageType() {
    var pageType = ""; //-----------------
    if (pageSetting == 1) {
        pageType = "vlan";
    }
    else if (pageSetting == 2) {
        pageType = "ip";
    }
    else if(pageSetting == 3){
        pageType = "ssid";
    }
    else if(pageSetting == 4){
        pageType = "areaID";
    }
    else if(pageSetting == 5){
        // 保留
        pageType = "time";
    }
    else if(pageSetting == 6){
        // 保留
        pageType = "ipv6";
    }
    // 多匹配项
    else if(pageSetting == 7){

        pageType = "many";
    }
    return pageType;
}

//获取登录方式，以什么方法登陆 返回为0,1,2,3.....
function getLoginMethod(pageIndex){
    var paraStr="0";
    if (pageSetting == 1) {
        paraStr = vlanPageAry[pageIndex];
    }
    else if (pageSetting == 2) {
        paraStr = ipPageAry[pageIndex];
    }
    else if(pageSetting == 3){
        paraStr = ssidPageAry[pageIndex];
    }
    else if(pageSetting == 4){
        paraStr = areaIDPageAry[pageIndex];
    }
    else if(pageSetting == 5){
        // 保留
        paraStr = timePageAry[pageIndex];
    }
    else if(pageSetting == 6){
        // 保留
        paraStr = ipv6PageAry[pageIndex];
    }
    else if(pageSetting == 7){
        // 保留
        paraStr = manyPageAry[pageIndex];
    }
    var paraArr = paraStr.split("|");

    var l=pageSetting == 7 ? paraArr.length-3 : paraArr.length-2;
    // return paraArr[l];
    return Number(paraArr[l]);
}