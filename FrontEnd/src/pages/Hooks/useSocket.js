// src/hooks/useSocket.js
import { useEffect, useMemo } from 'react';
import io from 'socket.io-client';

export default function useSocket(token){
    const socket = useMemo(() => io('http://localhost:8008', {
        query: { token },
        transports: ['websocket'] // This ensures the client does not try long polling.
    }), [token]);

    useEffect(() => {
        socket.connect();

        return () => {
            socket.disconnect();
        };
    }, [socket]);

    return socket;
};

