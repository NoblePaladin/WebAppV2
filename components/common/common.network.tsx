export const Networks = {
    Development: '0x539',
    Testnet: '0x4e454153',
    Mainnet: '0x4e454152',
}

export type NetworkType = 'Development' | 'Testnet' | 'Mainnet' | 'Null';

export function GetNetwork(ethereum): NetworkType {
    if (ethereum.chainId === Networks.Development) {
        return 'Development';
    }
    if (ethereum.chainId === Networks.Testnet) {
        return 'Testnet';
    }
    if (ethereum.chainId === Networks.Mainnet) {
        return 'Mainnet';
    }

    return 'Null';
}

export async function switchDevelopment(ethereum) {
    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x539' }],
        })
    } catch (switchError) {
        console.error(switchError);
    }
}

export async function switchTestnet(ethereum) {
    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x4e454153' }],
        })
    } catch (switchError) {
        if (switchError.code === 4902) {
            try {
                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: '0x4e454153',
                        chainName: 'Aurora Testnet',
                        rpcUrls: ['https://testnet.aurora.dev'],
                        nativeCurrency: {
                            name: 'Aurora',
                            symbol: 'AURORA',
                            decimals: 18
                        },
                    }],
                });

                switchTestnet(ethereum);
            } catch (addError) {
                console.error(addError);
            }
        } else {
            console.error(switchError);
        }
    }
}

export async function switchMainnet(ethereum) {
    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x4e454152' }],
        })
    } catch (switchError) {
        if (switchError.code === 4902) {
            try {
                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: '0x4e454152',
                        chainName: 'Aurora Mainnet',
                        rpcUrls: ['https://mainnet.aurora.dev'],
                        nativeCurrency: {
                            name: 'Aurora',
                            symbol: 'AURORA',
                            decimals: 18
                        },
                    }],
                });
                
                switchMainnet(ethereum);
            } catch (addError) {
                console.error(addError);
            }
        } else {
            console.error(switchError);
        }
    }
}