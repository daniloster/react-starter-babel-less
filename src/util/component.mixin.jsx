import React from 'react';

/*
ComponentMixins has been deprecated so, if you wanna bind an input field,
simple helper functions can handle it. Check input.binding.jsx out!
*/
export default function ComponentMixins( ...mixins) {

    class MixedComponent extends React.Component { }
    
    for(let mixin of mixins) {
        // TODO: Would need to handle mixin collisions...   
        for(let name of Object.keys(mixin)) {
            MixedComponent.prototype[name]= mixin[name]
        }
    }
    
    return MixedComponent
}