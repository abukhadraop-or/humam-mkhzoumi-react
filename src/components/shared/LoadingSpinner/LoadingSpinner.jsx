import React from 'react';
import {
	LoadingWrapper,
	AnimateWrapper,
} from 'components/shared/LoadingSpinner/loading-spinner-styled';

function LoadingSpinner() {
	return (
		<LoadingWrapper>
			<AnimateWrapper></AnimateWrapper>
			<AnimateWrapper></AnimateWrapper>
		</LoadingWrapper>
	);
}
export default LoadingSpinner;
