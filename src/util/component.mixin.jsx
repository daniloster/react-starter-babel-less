import React from 'react';

export default function ComponentMixins( ...mixins) {

    class MixedComponent extends React.Component { }
    
    for( let mixin of mixins) {
        // TODO: Would need to handle mixin collisions...   
        for( let name of Object.keys( mixin)) {
            MixedComponent.prototype[ name]= mixin[ name]
        }
    }
    
    return MixedComponent
}