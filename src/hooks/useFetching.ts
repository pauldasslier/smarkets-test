import { useState, useEffect, useRef, useCallback } from 'react';
import axios, { CancelToken, CancelTokenSource } from 'axios';

type UseFetching<T> = {
    getData: (token: CancelToken) => Promise<T>;
    onSuccess: (data: T) => void;
    onFailure?: () => void;
    skipInitial?: boolean;
    deps?: [],
}

const useFetching = <T>({
    onFailure = () => {},
    skipInitial = false,
    onSuccess,
    getData,
}: UseFetching<T>) => {
    const cancelSource = useRef<CancelTokenSource>();
    const [state, setState] = useState({
        loading: !skipInitial,
        error: false,
    });

    const get = () => {
        cancelSource.current?.cancel();
        cancelSource.current = axios.CancelToken.source();
        getData(cancelSource.current.token)
            .then((res) => {
                onSuccess(res);
                setState({ loading: false, error: false });
            })
            .catch((err) => {
                if (!axios.isCancel(err)) {
                    setState({
                        loading: false,
                        error: true,
                    });

                    onFailure();
                }
            });
    };

    useEffect(() => {
        if (!skipInitial) {
            get();
        }

        return () => {
            cancelSource.current?.cancel();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onRetry = useCallback(() => {
        setState({ loading: true, error: false });
        get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getData]);

    return {
        loading: state.loading,
        error: state.error,
        onRetry,
    };
};

export default useFetching;