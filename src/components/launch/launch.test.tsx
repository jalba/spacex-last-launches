import React from 'react';
import { render, screen } from '@testing-library/react';

import Launch from './launch';

const defaultLaunch = {
  details: 'test details',
  mission_name: 'test',
  links: {
    article_link: 'https://test-link.com',
    mission_patch_small: 'https://test-patch.com',
    wikipedia: null,
    video_link: 'https://test-video.com'
  }
};

const noImageLaunch = {
  details: 'test details',
  mission_name: 'test',
  links: {
    article_link: 'https://test-link.com',
    mission_patch_small: null,
    wikipedia: null,
    video_link: 'https://test-video.com'
  }
};

const noDetailsLaunch = {
  details: null,
  mission_name: 'test',
  links: {
    article_link: 'https://test-link.com',
    mission_patch_small: null,
    wikipedia: null,
    video_link: 'https://test-video.com'
  }
};

const noArticleLaunch = {
  details: 'test details',
  mission_name: 'test',
  links: {
    article_link: null,
    mission_patch_small: null,
    wikipedia: null,
    video_link: 'https://test-video.com'
  }
};

const wikipediaLaunch = {
  details: 'test details',
  mission_name: 'test',
  links: {
    article_link: null,
    mission_patch_small: null,
    wikipedia: 'https://wikipedia.com',
    video_link: null
  }
};

const noLinksLaunch = {
  details: 'test details',
  mission_name: 'test',
  links: {
    article_link: null,
    mission_patch_small: null,
    wikipedia: null,
    video_link: null
  }
};

describe('The Launch Component', () => {
  it('should render the correct data for the launch', () => {
    render(<Launch data={defaultLaunch} />);
    const details = screen.getByText('test details');
    const image = screen.getByAltText('test');
    const button = screen.getByTitle('Follow link');
    const href = button.getAttribute('href');

    expect(details).toBeDefined();
    expect(image).toBeDefined();
    expect(href).toEqual(defaultLaunch.links.article_link);
  });

  it('should render a placeholder if no details are available', () => {
    render(<Launch data={noDetailsLaunch} />);
    const details = screen.getByText('No details provided');

    expect(details).toBeDefined();
  });

  it('should render a placeholder if no image is provided', () => {
    render(<Launch data={noImageLaunch} />);
    const placeholder = screen.getByText('No image available');

    expect(placeholder).toBeDefined();
  });

  it('should render a link to the video if no article link is present', () => {
    render(<Launch data={noArticleLaunch} />);
    const button = screen.getByTitle('Follow link');
    const href = button.getAttribute('href');

    expect(href).toEqual(noArticleLaunch.links.video_link);
  });

  it('should render a link to wikipedia if it is the only one available', () => {
    render(<Launch data={wikipediaLaunch} />);
    const button = screen.getByTitle('Follow link');
    const href = button.getAttribute('href');

    expect(href).toEqual(wikipediaLaunch.links.wikipedia);
  });

  it('should disable the button if no links are available', () => {
    render(<Launch data={noLinksLaunch} />);
    const button = screen.getByTitle('No link available');

    expect(button).toBeDisabled();
  });
});
