import{c as T}from"/build/_shared/chunk-RAQ24GF6.js";var M=T((A,m)=>{function y(e){return e?typeof e=="string"?e:e.source:null}function O(e){return d("(?=",e,")")}function l(e){return d("(",e,")?")}function d(...e){return e.map(i=>y(i)).join("")}function w(e){let t=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),i="decltype\\(auto\\)",r="[a-zA-Z_]\\w*::",g="<[^<>]+>",f="("+i+"|"+l(r)+"[a-zA-Z_]\\w*"+l(g)+")",s={className:"keyword",begin:"\\b[a-z\\d_]*_t\\b"},E="\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",a={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+E+"|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},c={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},o={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{"meta-keyword":"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(a,{className:"meta-string"}),{className:"meta-string",begin:/<.*?>/},t,e.C_BLOCK_COMMENT_MODE]},b={className:"title",begin:l(r)+e.IDENT_RE,relevance:0},_=l(r)+e.IDENT_RE+"\\s*\\(",n={keyword:"int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",built_in:"_Bool _Complex _Imaginary",_relevance_hints:["asin","atan2","atan","calloc","ceil","cosh","cos","exit","exp","fabs","floor","fmod","fprintf","fputs","free","frexp","auto_ptr","deque","list","queue","stack","vector","map","set","pair","bitset","multiset","multimap","unordered_set","fscanf","future","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","tolower","toupper","labs","ldexp","log10","log","malloc","realloc","memchr","memcmp","memcpy","memset","modf","pow","printf","putchar","puts","scanf","sinh","sin","snprintf","sprintf","sqrt","sscanf","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","tanh","tan","unordered_map","unordered_multiset","unordered_multimap","priority_queue","make_pair","array","shared_ptr","abort","terminate","abs","acos","vfprintf","vprintf","vsprintf","endl","initializer_list","unique_ptr","complex","imaginary","std","string","wstring","cin","cout","cerr","clog","stdin","stdout","stderr","stringstream","istringstream","ostringstream"],literal:"true false nullptr NULL"},p={className:"function.dispatch",relevance:0,keywords:n,begin:d(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!while)/,e.IDENT_RE,O(/\s*\(/))},u=[p,o,s,t,e.C_BLOCK_COMMENT_MODE,c,a],N={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:n,contains:u.concat([{begin:/\(/,end:/\)/,keywords:n,contains:u.concat(["self"]),relevance:0}]),relevance:0},C={className:"function",begin:"("+f+"[\\*&\\s]+)+"+_,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:n,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:i,keywords:n,relevance:0},{begin:_,returnBegin:!0,contains:[b],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[a,c]},{className:"params",begin:/\(/,end:/\)/,keywords:n,relevance:0,contains:[t,e.C_BLOCK_COMMENT_MODE,a,c,s,{begin:/\(/,end:/\)/,keywords:n,relevance:0,contains:["self",t,e.C_BLOCK_COMMENT_MODE,a,c,s]}]},s,t,e.C_BLOCK_COMMENT_MODE,o]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:n,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(N,C,p,u,[o,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",end:">",keywords:n,contains:["self",s]},{begin:e.IDENT_RE+"::",keywords:n},{className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{preprocessor:o,strings:a,keywords:n}}}function h(e){let t=w(e),i=["c","h"],r=["cc","c++","h++","hpp","hh","hxx","cxx"];return t.disableAutodetect=!0,t.aliases=[],e.getLanguage("c")||t.aliases.push(...i),e.getLanguage("cpp")||t.aliases.push(...r),t}m.exports=h});export default M();
