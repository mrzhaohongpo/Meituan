var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20181221_syb_scopedata*/window.__wcc_version__='v0.5vv_20181221_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'31e7af22'])
Z([3,'_view 31e7af22 page-share-title'])
Z([3,'_text 31e7af22'])
Z([a,[3,'感谢'],[[7],[3,'name']],[3,'提供本示例，']])
Z([3,'handleProxy'])
Z([3,'_text 31e7af22 submit'])
Z([[7],[3,'$k']])
Z([1,'31e7af22-0'])
Z([3,'我也提交'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'31e62c3e'])
Z([3,'_view 31e62c3e uni-page-head'])
Z([3,'_view 31e62c3e uni-page-head-title'])
Z([a,[[7],[3,'title']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3e8d0628'])
Z([3,'_view 3e8d0628'])
Z([3,'_scroll-view 3e8d0628 navs scroll-view_H'])
Z([3,'true'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'navs']])
Z([3,'item.id'])
Z([3,'handleProxy'])
Z([a,[3,'_view 3e8d0628 scroll-view-item_H '],[[6],[[7],[3,'item']],[3,'actions']]])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'3e8d0628-0-'],[[7],[3,'index']]])
Z([[6],[[7],[3,'item']],[3,'id']])
Z(z[12])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3e8d0628'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'2a28c52e'])
Z([3,'_view 2a28c52e'])
Z([3,'login'])
Z([3,'_view 2a28c52e login1'])
Z([3,'_view 2a28c52e login_wid'])
Z([3,'账号'])
Z([3,'_input 2a28c52e'])
Z([3,'请输入人账号'])
Z([3,'text'])
Z([3,'_view 2a28c52e login2'])
Z(z[4])
Z([3,'密码'])
Z(z[6])
Z([[7],[3,'ispassword']])
Z([3,'请输入密码'])
Z(z[8])
Z([3,'handleProxy'])
Z([a,[3,'_rich-text 2a28c52e iconlogo iconfont '],[[7],[3,'iconSe']]])
Z([[7],[3,'$k']])
Z([1,'2a28c52e-0'])
Z([3,'i'])
Z([[7],[3,'icon']])
Z([3,'_button 2a28c52e loginto'])
Z([3,'hovebtn'])
Z([3,'primary'])
Z([3,'登陆'])
Z([3,'_button 2a28c52e loginout'])
Z([3,'warn'])
Z([3,'注销'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2a28c52e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1d382652'])
Z([3,'_view 1d382652 set'])
Z([3,'_view 1d382652 tops'])
Z([3,'handleProxy'])
Z([3,'_view 1d382652 tops1'])
Z([[7],[3,'$k']])
Z([1,'1d382652-0'])
Z([3,'_image 1d382652'])
Z([3,'../../static/images/logo.png'])
Z([3,'width: 150rpx;height: 150rpx;margin: 10rpx'])
Z([3,'_text 1d382652'])
Z([3,'Hi,您未登录'])
Z(z[3])
Z([3,'_span 1d382652 iconfont'])
Z(z[5])
Z([1,'1d382652-1'])
Z([3,''])
Z([3,'_view 1d382652 head'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'lists']])
Z([3,'item.id'])
Z([3,'_p 1d382652'])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'_view 1d382652 headleft'])
Z([[7],[3,'index']])
Z([3,'_rich-text 1d382652 iconfont icons'])
Z([3,'i'])
Z([[6],[[7],[3,'item']],[3,'icon']])
Z(z[10])
Z([a,[[6],[[7],[3,'item']],[3,'text']]])
Z([3,'_i 1d382652 iconfont'])
Z(z[16])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1d382652'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./common/slots.wxml','./components/page-foot.vue.wxml','./components/page-head.vue.wxml','./pages/list/list.vue.wxml','./pages/list/list.wxml','./list.vue.wxml','./pages/myuse/login.vue.wxml','./pages/myuse/login.wxml','./login.vue.wxml','./pages/myuse/myuser.vue.wxml','./pages/myuse/myuser.wxml','./myuser.vue.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
d_[x[1]]["31e7af22"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':31e7af22'
r.wxVkey=b
gg.f=$gdc(f_["./components/page-foot.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
cs.push("./components/page-foot.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./components/page-foot.vue.wxml:text:1:73")
var xC=_n('text')
_rz(z,xC,'class',2,e,s,gg)
var oD=_oz(z,3,e,s,gg)
_(xC,oD)
cs.pop()
_(oB,xC)
cs.push("./components/page-foot.vue.wxml:text:1:141")
var fE=_mz(z,'text',['bindtap',4,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var cF=_oz(z,8,e,s,gg)
_(fE,cF)
cs.pop()
_(oB,fE)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
d_[x[2]]["31e62c3e"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[2]+':31e62c3e'
r.wxVkey=b
gg.f=$gdc(f_["./components/page-head.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
cs.push("./components/page-head.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./components/page-head.vue.wxml:view:1:70")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_oz(z,3,e,s,gg)
_(xC,oD)
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
d_[x[3]]["3e8d0628"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[3]+':3e8d0628'
r.wxVkey=b
gg.f=$gdc(f_["./pages/list/list.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[3]);return}
p_[b]=true
try{
cs.push("./pages/list/list.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/list/list.vue.wxml:scroll-view:1:56")
var xC=_mz(z,'scroll-view',['class',2,'scrollX',1],[],e,s,gg)
var oD=_v()
_(xC,oD)
cs.push("./pages/list/list.vue.wxml:view:1:134")
var fE=function(hG,cF,oH,gg){
cs.push("./pages/list/list.vue.wxml:view:1:134")
var oJ=_mz(z,'view',['bindtap',8,'class',1,'data-comkey',2,'data-eventid',3,'id',4,'key',5],[],hG,cF,gg)
var lK=_oz(z,14,hG,cF,gg)
_(oJ,lK)
cs.pop()
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2z(z,6,fE,e,s,gg,oD,'item','index','item.id')
cs.pop()
cs.pop()
_(oB,xC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cF=e_[x[4]].i
_ai(cF,x[5],e_,x[4],1,1)
var hG=_v()
_(r,hG)
cs.push("./pages/list/list.wxml:template:2:6")
var oH=_oz(z,1,e,s,gg)
var cI=_gd(x[4],oH,e_,d_)
if(cI){
var oJ=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[4],2,18)
cs.pop()
cF.pop()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[x[5]],ic:[]}
d_[x[6]]={}
d_[x[6]]["2a28c52e"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[6]+':2a28c52e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/myuse/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
cs.push("./pages/myuse/login.vue.wxml:view:1:27")
var oB=_mz(z,'view',['class',1,'id',1],[],e,s,gg)
cs.push("./pages/myuse/login.vue.wxml:view:1:67")
var xC=_n('view')
_rz(z,xC,'class',3,e,s,gg)
cs.push("./pages/myuse/login.vue.wxml:view:1:103")
var oD=_n('view')
_rz(z,oD,'class',4,e,s,gg)
var fE=_oz(z,5,e,s,gg)
_(oD,fE)
cs.pop()
_(xC,oD)
cs.push("./pages/myuse/login.vue.wxml:input:1:155")
var cF=_mz(z,'input',['class',6,'placeholder',1,'type',2],[],e,s,gg)
cs.pop()
_(xC,cF)
cs.pop()
_(oB,xC)
cs.push("./pages/myuse/login.vue.wxml:view:1:240")
var hG=_n('view')
_rz(z,hG,'class',9,e,s,gg)
cs.push("./pages/myuse/login.vue.wxml:view:1:276")
var oH=_n('view')
_rz(z,oH,'class',10,e,s,gg)
var cI=_oz(z,11,e,s,gg)
_(oH,cI)
cs.pop()
_(hG,oH)
cs.push("./pages/myuse/login.vue.wxml:input:1:328")
var oJ=_mz(z,'input',['class',12,'password',1,'placeholder',2,'type',3],[],e,s,gg)
cs.pop()
_(hG,oJ)
cs.push("./pages/myuse/login.vue.wxml:rich-text:1:429")
var lK=_mz(z,'rich-text',['bindtap',16,'class',1,'data-comkey',2,'data-eventid',3,'name',4,'nodes',5],[],e,s,gg)
cs.pop()
_(hG,lK)
cs.pop()
_(oB,hG)
cs.push("./pages/myuse/login.vue.wxml:button:1:617")
var aL=_mz(z,'button',['class',22,'hoverClass',1,'type',2],[],e,s,gg)
var tM=_oz(z,25,e,s,gg)
_(aL,tM)
cs.pop()
_(oB,aL)
cs.push("./pages/myuse/login.vue.wxml:button:1:710")
var eN=_mz(z,'button',['class',26,'type',1],[],e,s,gg)
var bO=_oz(z,28,e,s,gg)
_(eN,bO)
cs.pop()
_(oB,eN)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[6]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var tM=e_[x[7]].i
_ai(tM,x[8],e_,x[7],1,1)
var eN=_v()
_(r,eN)
cs.push("./pages/myuse/login.wxml:template:2:6")
var bO=_oz(z,1,e,s,gg)
var oP=_gd(x[7],bO,e_,d_)
if(oP){
var xQ=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
eN.wxXCkey=3
oP(xQ,xQ,eN,gg)
gg.f=cur_globalf
}
else _w(bO,x[7],2,18)
cs.pop()
tM.pop()
return r
}
e_[x[7]]={f:m6,j:[],i:[],ti:[x[8]],ic:[]}
d_[x[9]]={}
d_[x[9]]["1d382652"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[9]+':1d382652'
r.wxVkey=b
gg.f=$gdc(f_["./pages/myuse/myuser.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
cs.push("./pages/myuse/myuser.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/myuse/myuser.vue.wxml:view:1:60")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/myuse/myuser.vue.wxml:view:1:94")
var oD=_mz(z,'view',['bindtap',3,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/myuse/myuser.vue.wxml:image:1:204")
var fE=_mz(z,'image',['class',7,'src',1,'style',2],[],e,s,gg)
cs.pop()
_(oD,fE)
cs.push("./pages/myuse/myuser.vue.wxml:text:1:329")
var cF=_n('text')
_rz(z,cF,'class',10,e,s,gg)
var hG=_oz(z,11,e,s,gg)
_(cF,hG)
cs.pop()
_(oD,cF)
cs.pop()
_(xC,oD)
cs.push("./pages/myuse/myuser.vue.wxml:label:1:387")
var oH=_mz(z,'label',['bindtap',12,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var cI=_oz(z,16,e,s,gg)
_(oH,cI)
cs.pop()
_(xC,oH)
cs.pop()
_(oB,xC)
cs.push("./pages/myuse/myuser.vue.wxml:view:1:519")
var oJ=_n('view')
_rz(z,oJ,'class',17,e,s,gg)
var lK=_v()
_(oJ,lK)
cs.push("./pages/myuse/myuser.vue.wxml:view:1:553")
var aL=function(eN,tM,bO,gg){
cs.push("./pages/myuse/myuser.vue.wxml:view:1:553")
var xQ=_mz(z,'view',['class',22,'key',1],[],eN,tM,gg)
cs.push("./pages/myuse/myuser.vue.wxml:view:1:673")
var oR=_mz(z,'view',['class',24,'key',1],[],eN,tM,gg)
cs.push("./pages/myuse/myuser.vue.wxml:rich-text:1:727")
var fS=_mz(z,'rich-text',['class',26,'name',1,'nodes',2],[],eN,tM,gg)
cs.pop()
_(oR,fS)
cs.push("./pages/myuse/myuser.vue.wxml:text:1:824")
var cT=_n('text')
_rz(z,cT,'class',29,eN,tM,gg)
var hU=_oz(z,30,eN,tM,gg)
_(cT,hU)
cs.pop()
_(oR,cT)
cs.pop()
_(xQ,oR)
cs.push("./pages/myuse/myuser.vue.wxml:view:1:880")
var oV=_n('view')
_rz(z,oV,'class',31,eN,tM,gg)
var cW=_oz(z,32,eN,tM,gg)
_(oV,cW)
cs.pop()
_(xQ,oV)
cs.pop()
_(bO,xQ)
return bO
}
lK.wxXCkey=2
_2z(z,20,aL,e,s,gg,lK,'item','index','item.id')
cs.pop()
cs.pop()
_(oB,oJ)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[9]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var cT=e_[x[10]].i
_ai(cT,x[11],e_,x[10],1,1)
var hU=_v()
_(r,hU)
cs.push("./pages/myuse/myuser.wxml:template:2:6")
var oV=_oz(z,1,e,s,gg)
var cW=_gd(x[10],oV,e_,d_)
if(cW){
var oX=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
hU.wxXCkey=3
cW(oX,oX,hU,gg)
gg.f=cur_globalf
}
else _w(oV,x[10],2,18)
cs.pop()
cT.pop()
return r
}
e_[x[10]]={f:m8,j:[],i:[],ti:[x[11]],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@font-face { font-family: \x27iconfont\x27; src: url(../../static/fonts/iconfont.d490c620.eot-do-not-use-local-path-./common/main.wxss\x264\x267); src: url(../../static/fonts/iconfont.d490c620.eot?#iefix-do-not-use-local-path-./common/main.wxss\x269\x267) format(\x27embedded-opentype\x27),\n      url(data:font/woff2;base64,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\x3d\x3d) format(\x27woff2\x27),\n      url(data:font/woff;base64,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) format(\x27woff\x27),\n      url(../../static/fonts/iconfont.f04fa5ed.ttf-do-not-use-local-path-./common/main.wxss\x269\x267) format(\x27truetype\x27),\n      url(../../static/img/iconfont.189f70e5.svg#iconfont-do-not-use-local-path-./common/main.wxss\x269\x267) format(\x27svg\x27); }\n.",[1],"iconfont { font-family: \x22iconfont\x22 !important; font-size: 16px; font-style: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\nbody { background: #EFEFEF; }\nbody { background-color: #F4F5F6; height: 100%; font-size: ",[0,28],"; line-height: 1.8; }\n.",[1],"uni-header-logo { padding: ",[0,30],"; text-align: center; margin-top: ",[0,10],"; }\n.",[1],"uni-header-logo wx-image { width: ",[0,140],"; height: ",[0,140],"; }\n.",[1],"uni-hello-text { color: #7A7E83; }\n.",[1],"uni-hello-addfile { text-align: center; line-height: ",[0,300],"; background: #FFF; padding: ",[0,50],"; margin-top: 10px; font-size: ",[0,38],"; color: #808080; }\n.",[1],"page-share-title { text-align: center; font-size: ",[0,30],"; color: #BEBEBE; padding: ",[0,20]," 0; }\n.",[1],"submit { border-bottom: ",[0,1]," solid #BEBEBE; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

;var __pageFrameEndTime__ = Date.now();
if(!window.__uniAppViewReady__){
	window.__uniAppViewReady__ = true;
	document.dispatchEvent(new CustomEvent('uniAppViewReady'));
}

