import * as React from 'react'
import { Scene, Storyboard, RemixScene } from 'utopia-api'
import { App } from '/src/app.js'
import { Playground } from '/src/playground.js'
import Index from '/src/routes/_index'
import { Group } from 'utopia-api'
import { MoodBoard } from '/src/mood-board.js'

export var storyboard = (
  <Storyboard>
    <RemixScene
      className='my-class'
      style={{
        position: 'absolute',
        width: 834,
        height: 1328,
        left: 8,
        top: -24,
        overflow: 'hidden',
      }}
      data-label='Mood Board'
      commentId='1bd'
    />
    <RemixScene
      className='my-class'
      style={{
        position: 'absolute',
        width: 834,
        height: 1328,
        left: 916,
        top: -24,
        overflow: 'hidden',
      }}
      data-label='Mood Board'
      commentId='d52'
    />
    <Scene
      style={{
        position: 'absolute',
        left: -2464,
        width: 2368,
        height: 1656,
        top: -24,
      }}
      data-label='Mood Board'
      commentId='153'
    >
      <MoodBoard />
    </Scene>
    <img
      style={{
        width: '1176px',
        height: '1176px',
        position: 'absolute',
        top: -24,
        left: 2888,
      }}
      src='/editor/utopia-logo-white-fill.png?hash=909db3b5ff87b73cd3f690866cb6fd6baff4531f'
    />
  </Storyboard>
)
