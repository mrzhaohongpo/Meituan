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
Z([3,'_span 1d382652 iconfont'])
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
Z(z[13])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1d382652'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./common/slots.wxml','./components/page-foot.vue.wxml','./components/page-head.vue.wxml','./pages/list/list.vue.wxml','./pages/list/list.wxml','./list.vue.wxml','./pages/myuse/myuser.vue.wxml','./pages/myuse/myuser.wxml','./myuser.vue.wxml'];d_[x[0]]={}
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
d_[x[6]]["1d382652"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[6]+':1d382652'
r.wxVkey=b
gg.f=$gdc(f_["./pages/myuse/myuser.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
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
var oH=_n('label')
_rz(z,oH,'class',12,e,s,gg)
var cI=_oz(z,13,e,s,gg)
_(oH,cI)
cs.pop()
_(xC,oH)
cs.pop()
_(oB,xC)
cs.push("./pages/myuse/myuser.vue.wxml:view:1:444")
var oJ=_n('view')
_rz(z,oJ,'class',14,e,s,gg)
var lK=_v()
_(oJ,lK)
cs.push("./pages/myuse/myuser.vue.wxml:view:1:478")
var aL=function(eN,tM,bO,gg){
cs.push("./pages/myuse/myuser.vue.wxml:view:1:478")
var xQ=_mz(z,'view',['class',19,'key',1],[],eN,tM,gg)
cs.push("./pages/myuse/myuser.vue.wxml:view:1:598")
var oR=_mz(z,'view',['class',21,'key',1],[],eN,tM,gg)
cs.push("./pages/myuse/myuser.vue.wxml:rich-text:1:652")
var fS=_mz(z,'rich-text',['class',23,'name',1,'nodes',2],[],eN,tM,gg)
cs.pop()
_(oR,fS)
cs.push("./pages/myuse/myuser.vue.wxml:text:1:749")
var cT=_n('text')
_rz(z,cT,'class',26,eN,tM,gg)
var hU=_oz(z,27,eN,tM,gg)
_(cT,hU)
cs.pop()
_(oR,cT)
cs.pop()
_(xQ,oR)
cs.push("./pages/myuse/myuser.vue.wxml:view:1:805")
var oV=_n('view')
_rz(z,oV,'class',28,eN,tM,gg)
var cW=_oz(z,29,eN,tM,gg)
_(oV,cW)
cs.pop()
_(xQ,oV)
cs.pop()
_(bO,xQ)
return bO
}
lK.wxXCkey=2
_2z(z,17,aL,e,s,gg,lK,'item','index','item.id')
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
cs.push("./pages/myuse/myuser.wxml:template:2:6")
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
var _C= [[[2,1],],["@font-face { font-family: \x27iconfont\x27; src: url(../../static/fonts/iconfont.0b9035e5.eot-do-not-use-local-path-./common/main.wxss\x264\x267); src: url(../../static/fonts/iconfont.0b9035e5.eot?#iefix-do-not-use-local-path-./common/main.wxss\x269\x267) format(\x27embedded-opentype\x27),\n      url(data:font/woff2;base64,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\x3d) format(\x27woff2\x27),\n      url(data:font/woff;base64,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) format(\x27woff\x27),\n      url(../../static/fonts/iconfont.bfa439a7.ttf-do-not-use-local-path-./common/main.wxss\x269\x267) format(\x27truetype\x27),\n      url(../../static/img/iconfont.3b5eee2e.svg#iconfont-do-not-use-local-path-./common/main.wxss\x269\x267) format(\x27svg\x27); }\n.",[1],"iconfont { font-family: \x22iconfont\x22 !important; font-size: 16px; font-style: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\nbody { background: #EFEFEF; }\nbody { background-color: #F4F5F6; height: 100%; font-size: ",[0,28],"; line-height: 1.8; }\n.",[1],"uni-header-logo { padding: ",[0,30],"; text-align: center; margin-top: ",[0,10],"; }\n.",[1],"uni-header-logo wx-image { width: ",[0,140],"; height: ",[0,140],"; }\n.",[1],"uni-hello-text { color: #7A7E83; }\n.",[1],"uni-hello-addfile { text-align: center; line-height: ",[0,300],"; background: #FFF; padding: ",[0,50],"; margin-top: 10px; font-size: ",[0,38],"; color: #808080; }\n.",[1],"page-share-title { text-align: center; font-size: ",[0,30],"; color: #BEBEBE; padding: ",[0,20]," 0; }\n.",[1],"submit { border-bottom: ",[0,1]," solid #BEBEBE; }\n",],];
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

